declare const require: (id: string) => new (path: string) => any;
const Database = require("better-sqlite3");

export abstract class BaseDAO{
    protected db: any;
    constructor(dbPath:string = 'app.db'){
        this.db = new Database(dbPath);
        this.iniTable();
    }
    protected abstract iniTable():void;
}