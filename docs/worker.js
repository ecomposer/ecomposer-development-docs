const ECOM_DB_NAME = 'ecomposer';
const ECOM_DB_TABLE = 'revisions';
const DB = {
  connection: null,
  connecting: null,
  // The version is deliberately NOT a constant. It used to be, and every build that
  // shipped a lower number than a previous one (1 -> 3 -> 4 -> 3 -> 5 ...) permanently
  // bricked the store for anyone who had already reached the higher version, with
  // "The requested version (5) is less than the existing version (9)".
  // We now open at whatever version the browser already has, and only bump when the
  // object store is actually missing.
  open(version) {
    return new Promise((resolve, reject) => {
      let request = version ? indexedDB.open(ECOM_DB_NAME, version) : indexedDB.open(ECOM_DB_NAME);
      request.onerror = () => {
        console.error('Error opening db', request.error);
        reject(request.error || new Error('Error opening db'));
      };
      request.onblocked = () => {
        reject(new Error('Upgrade of the "' + ECOM_DB_NAME + '" database is blocked by another tab'));
      };
      request.onupgradeneeded = () => {
        let db = request.result;
        if (!db.objectStoreNames.contains(ECOM_DB_TABLE)) {
          db.createObjectStore(ECOM_DB_TABLE, {
            keyPath: 'id'
          });
        }
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  },
  async connect() {
    if (typeof indexedDB === 'undefined' || !indexedDB) {
      throw new Error("Your browser doesn't support a stable version of IndexedDB.");
    }
    // No version: an existing database opens as-is, a brand new one is created at 1
    // and gets its object store through onupgradeneeded.
    let db = await this.open();
    if (!db.objectStoreNames.contains(ECOM_DB_TABLE)) {
      let next = db.version + 1;
      db.close();
      db = await this.open(next);
    }
    // Never hold a stale handle: step aside when another tab upgrades, and drop the
    // cached connection so the next call reconnects instead of using a closed one.
    db.onversionchange = () => {
      db.close();
      this.connection = null;
    };
    db.onclose = () => {
      this.connection = null;
    };
    return db;
  },
  getDb() {
    if (this.connection) {
      return Promise.resolve(this.connection);
    }
    if (!this.connecting) {
      this.connecting = this.connect().then(db => {
        this.connection = db;
        this.connecting = null;
        return db;
      }, error => {
        this.connecting = null;
        throw error;
      });
    }
    return this.connecting;
  },
  async delete(params) {
    let db = await this.getDb();
    return new Promise(resolve => {
      let trans = db.transaction([ECOM_DB_TABLE], 'readwrite');
      trans.oncomplete = res => {
        resolve(res);
      };
      let store = trans.objectStore(ECOM_DB_TABLE);
      store.delete(params.id);
    });
  },
  async deleteByKeys(key) {
    let rows = await this.find(key);
    let db = await this.getDb();
    return new Promise(resolve => {
      let trans = db.transaction([ECOM_DB_TABLE], 'readwrite');
      let store = trans.objectStore(ECOM_DB_TABLE);
      rows.forEach(element => {
        store.delete(element.id);
      });
      resolve('');
    });
  },
  async getAll() {
    let db = await this.getDb();
    return new Promise(resolve => {
      let data = [];
      let trans = db.transaction([ECOM_DB_TABLE], 'readonly');
      trans.oncomplete = () => {
        resolve(data);
      };
      let store = trans.objectStore(ECOM_DB_TABLE);
      store.openCursor().onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },
  async find(key, limit) {
    let db = await this.getDb();
    return new Promise(resolve => {
      let data = [];
      let count = 0;
      let trans = db.transaction([ECOM_DB_TABLE], 'readonly');
      trans.oncomplete = () => {
        resolve(data);
      };
      let store = trans.objectStore(ECOM_DB_TABLE);
      store.openCursor().onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          if (key && cursor.value.key !== key) {
            cursor.continue();
            return false;
          }
          if (limit && count >= limit) {
            cursor.continue();
            return false;
          }
          count++;
          data.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },
  async update(params) {
    let db = await this.getDb();
    return new Promise(resolve => {
      let trans = db.transaction([ECOM_DB_TABLE], 'readwrite');
      trans.oncomplete = res => {
        resolve(res);
      };
      trans.objectStore(ECOM_DB_TABLE).put(params);
    });
  },
  async add(params) {
    let db = await this.getDb();
    return new Promise(resolve => {
      let trans = db.transaction(ECOM_DB_TABLE, 'readwrite').objectStore(ECOM_DB_TABLE).add(params);
      trans.oncomplete = res => {
        resolve(res);
      };
      trans.onerror = e => {
        console.log(e);
      };
    });
  }
};
onmessage = async e => {
  let data = e.data;
  let result = null;
  let status = 'success';
  try {
    switch (data.action) {
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
        result = await DB.find(data.params.key, data.params.limit);
        break;
      default:
        break;
    }
    postMessage({
      id: data.id,
      result: result && typeof result === 'object' ? JSON.parse(JSON.stringify(result)) : result,
      status
    });
  } catch (error) {
    console.error("Worker error for action " + data.action + ":", error);
    postMessage({
      id: data.id,
      result: error.message || error.toString(),
      status: 'error',
      // No connection means the database itself could not be opened: the caller should
      // stop asking rather than retry on every keystroke. A failure with a live
      // connection is just this one transaction going wrong.
      fatal: DB.connection === null
    });
  }
};
