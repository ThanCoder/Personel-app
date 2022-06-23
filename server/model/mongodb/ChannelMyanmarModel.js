const mongoose = require('mongoose')
const uuid = require('uuid')


const movieSchema = new mongoose.Schema({
    id:{
        type:String,
        default:uuid.v4()
    },
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:"movie"
    },
    genres:String,
    imdb:String,

    videoUrl:Array,
    
    seriesVideoUrl:{
        type:Array
    },
    coverUrl:{
        type:String
    },
    year:String,
    country:String,
    summary:String,
    date:{
        type:Number,
        default:Date.now()
    }
})


module.exports = mongoose.model('channelmyanmar',movieSchema)