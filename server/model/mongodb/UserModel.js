const mongoose = require('mongoose')
const uuid = require('uuid')
//user permission
const user_permission = {
    BEGINNER:1,
    NORMAL:4,
    ADMIN:5,

}


const user_fields = {
    ID:'id',
    NAME:'name',
    USER_NAME:'user_name',
    PASSWORD:'password',
    MAIL_ADDRESS:'mail_address',
    AGE:'age',
    GENDER:'gender',
    USER_PERMISSION_STATUS:'user_permission_status',
    DATE:'date'
}

const user = new mongoose.Schema({
    [user_fields.ID]:{
        type:String,
        default:uuid.v4()
    },
    [user_fields.NAME]:{
        type:String,
        default:''
    },
    [user_fields.USER_NAME]:{
        type:String,
        default:''
    },
    [user_fields.PASSWORD]:{
        type:String,
        default:''
    },
    [user_fields.USER_PERMISSION_STATUS]:{
        type:Number,
        default:user_permission.NORMAL
    },
    [user_fields.AGE]:{
        type:String,
        default:''
    },
    [user_fields.GENDER]:{
        type:String,
        default:''
    },
    [user_fields.MAIL_ADDRESS]:{
        type:String,
        default:''
    },
    [user_fields.DATE]:{
        type:Number,
        default:Date.now()
    }
})


module.exports = {
    UserModel:mongoose.model('user',user),
    user_fields,
    user_permission
}