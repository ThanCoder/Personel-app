const { user_fields,UserModel,user_permission } = require('../../model');
const config = require('../../../config')
const util = require('../../util')

async function register(req,res){
    try {
        let userMode = user_permission.NORMAL;

        if(req.body === undefined || req.body === '') throw `'req.body' not found or empty!`
        if(req.body.username === undefined || req.body.username === '') throw `'req.body' not found or empty!`
        const { username,password } = req.body;

        //search user
        const foundUser = await UserModel.findOne({[user_fields.USER_NAME]:req.body.username})
        if(foundUser !== null) throw `'username' already exists choose another one`
        //hash passwrod
        let hashPass = util.user.hashPass(password)
        //check admin or normal user
        if(config.admin.username == username){
            //is admin
            userMode = user_permission.ADMIN;
        }
        //not exists
        let newUser = new UserModel({
            [user_fields.USER_NAME]:username,
            [user_fields.PASSWORD]:hashPass,
            [user_fields.USER_PERMISSION_STATUS]:userMode

        })
        newUser.save()

        res.status(201).json({user:newUser,success:true})
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}



module.exports = {
    register
}