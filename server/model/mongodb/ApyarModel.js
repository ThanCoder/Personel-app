const mongoose = require('mongoose')
const uuid = require('uuid')
const config = require('../../../config')

const apyar_fields = {
    ID:'id',
    TITLE:'title',
    USER:'user',
    AUTHOR:'author',
    BODY:'body',
    COVER_URL:'cover_url',
    DATE:'date'
}

const apyar = new mongoose.Schema({
    [apyar_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [apyar_fields.TITLE]:{
        type:String,
        required:true
    },
    [apyar_fields.USER]:{
        type:String,
        default:config.admin.username
    },
    [apyar_fields.AUTHOR]:{
        type:String,
        default:'unknown'
    },
    [apyar_fields.BODY]:{
        type:String,
        default:''
    },
    [apyar_fields.COVER_URL]:{
        type:String,
        default:''
    },
    [apyar_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})


module.exports = {
    ApyarModel:mongoose.model('apyar',apyar),
    apyar_fields
}