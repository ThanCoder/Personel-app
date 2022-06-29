const mongoose = require('mongoose')
const uuid = require('uuid')

const novel_fields = {
    ID:'id',
    TITLE:'title',
    USER:'user',
    AUTHOR:'author',
    GENRES:'genres',
    SUMMARY:'summary',
    COVER_URL:'cover_url',
    DATE:'date'
}

const chapter_fields = {
    ID:'id',
    NOVLE_ID:'novel_id',
    TITLE:'title',
    USER:'user',
    CHAPTER:'chapter',
    BODY:'body',
    COVER_URL:'cover_url',
    DATE:'date'
}

const shareData_fields = {
    ID:"id",
    USER:'user',
    NOTE:'note',
    NOVEL_ID:'novel_id',
    TITLE:'title',
    COVER_URL:'cover_url',
    FILE_URL:'file_url',
    DATE:'date'
}

const novel_app_fields = {
    ID:"id",
    USER:'user',
    TITLE:'title',
    COVER_URL:'cover_url',
    FILE_URL:'file_url',
    NOTE:'note',
    VERSION_CODE:'version_code',
    DATE:'date'
}

const novel = new mongoose.Schema({
    [novel_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [novel_fields.TITLE]:{
        type:String,
        required:true
    },
    [novel_fields.USER]:{
        type:String,
        default:'Than'
    },
    [novel_fields.AUTHOR]:{
        type:String,
        default:'unknown'
    },
    [novel_fields.GENRES]:{
        type:String,
        default:''
    },
    [novel_fields.SUMMARY]:{
        type:String,
        default:''
    },
    [novel_fields.COVER_URL]:{
        type:String,
        default:''
    },
    [novel_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})

const chapter = new mongoose.Schema({
    [chapter_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [chapter_fields.NOVLE_ID]:{
        type:String,
        required:true
    },
    [chapter_fields.TITLE]:{
        type:String,
        default:"untitled"
    },
    [chapter_fields.CHAPTER]:{
        type:String,
        required:true
    },
    [chapter_fields.BODY]:{
        type:String,
        default:''
    },
    [chapter_fields.COVER_URL]:{
        type:String,
        default:''
    },
    [chapter_fields.USER]:{
        type:String,
        default:'Than'
    },
    [chapter_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})

const shareData = new mongoose.Schema({
    [shareData_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [shareData_fields.USER]:{
        type:String,
        default:'Than'
    },
    [shareData_fields.TITLE]:{
        type:String,
        default:''
    },
    [shareData_fields.NOVEL_ID]:{
        type:String,
        default:''
    },
    [shareData_fields.NOTE]:{
        type:String,
        default:''
    },
    [shareData_fields.FILE_URL]:{
        type:Array,
        default:[]
    },
    [shareData_fields.COVER_URL]:{
        type:String,
        default:''
    },
    [shareData_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})

const novelApp = new mongoose.Schema({
    [novel_app_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [novel_app_fields.USER]:{
        type:String,
        default:'Than'
    },
    [novel_app_fields.VERSION_CODE]:{
        type:Number,
        default:''
    },
    [novel_app_fields.TITLE]:{
        type:String,
        default:'Web Novel App'
    },
    [novel_app_fields.NOTE]:{
        type:String,
        default:''
    },
    [novel_app_fields.FILE_URL]:{
        type:String,
        default:''
    },
    [novel_app_fields.COVER_URL]:{
        type:String,
        default:''
    },
    [novel_app_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})


module.exports = {
    NovelModel:mongoose.model('novel',novel),
    ChapterModel:mongoose.model('chaper',chapter),
    ShareDataModel:mongoose.model('novel_share_data',shareData),
    NovelAppModel:mongoose.model('novel_app',novelApp),
    chapter_fields,
    novel_fields,
    shareData_fields,
    novel_app_fields
}