const mongoose = require('mongoose')
const uuid = require('uuid')

const schema = new mongoose.Schema({
    id:{
        type:String,
        default:uuid.v4()
    },
    title:{
        type:String,
        required:true
    },
    user:{
        type:String,
        default:'admin'
    },
    author:{
        type:String,
        default:'unknown'
    },
    body:String,
    date:{
        type:Number,
        default:Date.now()
    }
})


module.exports = {
    ApyarModel:mongoose.model('apyar',schema)
}