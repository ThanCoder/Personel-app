const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
//config
const config = require('./config')
const app = express()


//mongodb
mongoose.connect(config.mongodbUri,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('mongodb connected');
    }
})

app.use(express.json())



//route
app.use('/api/v1',require('./server/routes/v1'))
app.use('/api/v2',require('./server/routes/v2'))

express.static(path.join(__dirname,'public'))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log("server running on port "+port))
