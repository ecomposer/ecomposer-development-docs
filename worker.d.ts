declare const ECOM_DB_NAME: string;
declare const ECOM_DB_VERSION: number;
declare const ECOM_DB_TABLE: string;
interface Params {
    id: string;
}
declare const DB: {
    connection: any;
    getDb(): Promise<unknown>;
    delete(params: Params): Promise<any>;
    deleteByKeys(key: String): Promise<any>;
    getAll(): Promise<any>;
    find(key: any, limit: any): Promise<any>;
    update(params: any): Promise<any>;
    add(params: object): Promise<any>;
};
