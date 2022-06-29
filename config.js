const path = require('path')


const config = {
    mongoUri:'mongodb+srv://than:than0333@cluster0.59qwp.mongodb.net/personal',
    // mongoUri:'mongodb://localhost:27017/',
    mongodbName:'personal',
    staticPath:path.join(__dirname,'client','dist'),
    clientPath:path.resolve(__dirname,'public'),
    admin:{
        username:'Than',
        password:'0000'
    }
    
}


module.exports = {
    ...config,
    mongodbUri:config.mongoUri+config.mongodbName

};
