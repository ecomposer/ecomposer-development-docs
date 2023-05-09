const ECOM_DB_NAME: string = 'ecomposer';
const ECOM_DB_VERSION: number = 1;
const ECOM_DB_TABLE: string= 'revisions';
interface Params {
    id: string;
}
const DB  =  {
    connection: null,
	async getDb() {
		return new Promise((resolve, reject) => {

			if(this.connection) { return resolve(this.connection); }
			let request = indexedDB.open(ECOM_DB_NAME, ECOM_DB_VERSION);
			if (!indexedDB) {
                let message = "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.";
                console.log(message);
                reject(message);
            }
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				this.connection = request.result;
				resolve(this.connection);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db: any = e.target;
				db.result.createObjectStore(ECOM_DB_TABLE, { keyPath:  'id'});
			};
		});
	},
	async delete(params : Params): Promise<any> {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction([ ECOM_DB_TABLE ],'readwrite');
			trans.oncomplete = (res) => {
				resolve(res);
			};

			let store = trans.objectStore(ECOM_DB_TABLE);
			store.delete(params.id);
		});	
	},
    async deleteByKeys(key: String): Promise<any>{
        let rows = await this.find(key)
        let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction([ ECOM_DB_TABLE ],'readwrite');
			 

			let store = trans.objectStore(ECOM_DB_TABLE);
			rows.forEach(element => {
                store.delete(element.id);
            });
            resolve('');
		});	

    },
	async getAll(): Promise<any> {

		let db = await this.getDb();

		return new Promise(resolve => {
            let data: Array<Object> = [];
			let trans = db.transaction([ECOM_DB_TABLE],'readonly');
			trans.oncomplete = () => {
				resolve(data);
			};
			
			let store = trans.objectStore(ECOM_DB_TABLE);
			 
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					data.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},
    async find(key,limit): Promise<any> {
        let db = await this.getDb();
		return new Promise(resolve => {
            let data: Array<Object> = [];
            let count = 0;
			let trans = db.transaction([ECOM_DB_TABLE],'readonly');
			trans.oncomplete = () => {
				resolve(data);
			};
			
			let store = trans.objectStore(ECOM_DB_TABLE);
			 
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
                    if(key && cursor.value.key !== key)
                    {
                        cursor.continue();
                        return false;
                    }
                    if(limit && count >= limit)
                    {
                        cursor.continue();
                        return false;
                    }
                    count++;
                   
					data.push(cursor.value)
					cursor.continue();
				}
			};

		});
    },
	async update(params) : Promise<any> {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction([ECOM_DB_TABLE],'readwrite');
			trans.oncomplete = (res) => {
				resolve(res);
			};

			trans.objectStore(ECOM_DB_TABLE).put(params);

		});
	
	},
    async add(params:object) : Promise<any> {
		let db = await this.getDb();
		return new Promise(resolve => {

			let trans = db.transaction(ECOM_DB_TABLE,'readwrite').objectStore(ECOM_DB_TABLE).add( params )
			trans.oncomplete = (res) => {
				resolve(res);
			};
            trans.onerror = e=>{
                console.log(e);
            }


		});
	
	}

}
onmessage = async (e)  => {
    let data = e.data;
    let result = null;
    let status = 'success';
    switch(data.action){
        case 'getAll':
            result = await DB.getAll();
        break;
        case 'delete':
            result = await DB.delete(data.params);
        break;
        case 'deleteByKeys':
            result = await DB.deleteByKeys(data.params);
        break;
        case 'update':
            result = await DB.update(data.params);
        break;
        case 'add':
            result = await DB.add(data.params);
        break;
        case 'find':
            result = await DB.find(data.params.key,data.params.limit);
        break;
       
        case 'fetch':
            try{
                let form = null;
                const headers = {
                    Accept: 'application/json'
                };
                if(data.isForm && data.method === 'POST' && data.params)
                {
                    form = new FormData();
                    for (let key in data.params) {
                        form.append(key, data.params[key]);
                    }
                }
                else if(data.params) 
                {
                    form = JSON.stringify(data.params)
                    headers['Content-Type'] = 'application/json'
                }
                let res  = await fetch(data.route,{
                    method: data.method??'GET',
                    headers,
                    credentials: 'include',
                    mode: 'cors',
                    body:  form
                });
                result = {
                    data: await res.json(),
                     
                }
            }
            catch(e){
                status = 'error';
                result = e.message;
                
            }
            break;
        default:
            break;

    }
    postMessage({
        id: data.id,
        result: result && typeof result === 'object' ? JSON.parse(JSON.stringify(result)) : result,
        status
    });
}