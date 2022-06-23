const path = require('path');
const sqlite = require('sqlite3')

const dbPath = path.join(__dirname,'personal.db')

class DB {
    constructor({tableName=null}={}){
        if(tableName === null)return console.log('table name is null');
        this.tableName = tableName;

        this.db = new sqlite.Database(dbPath)

        this.createTable();

    }

    createTable(){}


    getAll({limit=10}={}){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM ${this.tableName} ORDER BY date DESC LIMIT ${limit}`;

            this.db.all(sql,(err,res)=>{
                if(err) return reject(err)
                resolve(res)
            })

        })
    }

    get({id=null}={}){
        return new Promise((resolve,reject)=>{
            if(id === null) return reject("is is null")
            let sql = `SELECT * FROM ${this.tableName} WHERE id=?`;

            this.db.get(sql,[id],(err,res)=>{
                if(err) return reject(err)
                resolve(res)
            })
        })
    }


    delete({id=null}={}){
        return new Promise((resolve,reject)=>{
            if(id === null) return reject('id is null')
            let sql = `DELETE FROM ${this.tableName} WHERE id="${id}"`;

            this.db.run(sql,(err,res)=>{
                if(err) return reject(err)
                resolve(res)
            })
        })
    }


}


module.exports = DB;