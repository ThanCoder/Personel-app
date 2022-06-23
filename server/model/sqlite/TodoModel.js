const uuid = require('uuid')
const DB = require('./DB')


class TodoModel extends DB {
    
    createTable(){
        let sql = `CREATE TABLE IF NOT EXISTS ${this.tableName} (id TEXT,name TEXT,completed INTEGER,date INTEGER)`;
        
        this.db.run(sql,(err)=>{
            if(err){
                console.log(err);
            }
        })

        
    }
    
    add({id=uuid.v4(),name,completed=false,date=Date.now()}={}){
        return new Promise((resolve,reject)=>{
            let sql =  `INSERT INTO ${this.tableName} (id,name,completed,date) VALUES (?,?,?,?)`

            this.db.run(sql,[id,name,completed ? 1 : 0,date],(err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve({id,name,completed,date})
                }
                
            })

            
        })
    }

    
}




module.exports = new TodoModel({tableName:'todo'})