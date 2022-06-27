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
app.use(express.static(path.join(__dirname,'public')))

const routes = require('./server/routes')
//routes
app.use('/api/v1',routes.v1)
app.use('/api/v2',routes.v2)


app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log("server running on port http://localhost:"+port))
