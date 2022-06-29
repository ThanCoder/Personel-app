const mongoose = require('mongoose')
const uuid = require('uuid')

const movie_fields = {
    ID:'id',
    TITLE:'title',
    TYPE:'type',
    GENRES:'genres',
    FILE_URL:'file_url',
    COVER_URL:'cover_url',
    SUMMARY:'summary',
    DATE:'date'
}

const movieSchema = new mongoose.Schema({
    [movie_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [movie_fields.TITLE]:{
        type:String,
        required:true
    },
    [movie_fields.TYPE]:{
        type:String,
        default:"movie"
    },
    [movie_fields.GENRES]:{
        type:String,
        default:''
    },
    [movie_fields.FILE_URL]:{
        type:Array,
        default:[]
    },
    [movie_fields.COVER_URL]:{
        type:String,
        default:''
    },
    [movie_fields.SUMMARY]:{
        type:String,
        default:''
    },
    [movie_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})


module.exports = {
    MovieModel:mongoose.model('movie',movieSchema),
    movie_fields
}