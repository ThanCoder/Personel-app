const config = require('../../../config')
const { user_fields,UserModel } = require('../../model');
const util = require('../../util')


async function login(req,res){
    try {
        if(req.body === undefined) throw 'req.body not found!'
        if(req.body.username === undefined || req.body.username === '') throw 'username not found ! or empty!'
        if(req.body.password === undefined || req.body.password === '') throw 'password not found or empty!'
        let user = req.body;
        let foundUser = await UserModel.findOne({[user_fields.USER_NAME]:user.username})
        if(foundUser === null){
            //user not found and test admin user
            if(user.username === config.admin.username){
                //is admin user
                if(config.admin.password === '' || user.password === config.admin.password){
                    //is admin password
                    res.status(200).json({success:true,token:util.user.tokenSign(user)})
                }else throw 'admin user password not match!'
            }else throw 'user not found!'

        }else{
            //is found user
            //check user password
            let pSuccess = util.user.comparePass(req.body.password,foundUser.password)
            if(!pSuccess) throw `User 'password' not match!`;

            res.status(200).json({success:true,token:util.user.tokenSign(foundUser)})

        }
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}



module.exports = {
    login
}