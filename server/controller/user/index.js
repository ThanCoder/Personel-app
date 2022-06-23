const { user_fields,UserModel } = require('../../model');
const util = require('../../util')


async function getUsers(req,res){
    try {
        
        if(req.headers.token === undefined || req.headers.token == '') throw 'user token not found! or empty!'
        let user = util.user.tokenVerify(req.headers.token)
        
        let users = await UserModel.find();

        res.status(200).json({user,users})
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}

async function getTokenUser(req,res){
    try {
        if(req.headers.token === undefined || req.headers.token == '') throw 'user token not found! or empty!'
        let user = util.user.tokenVerify(req.headers.token)

        res.status(200).json({user})
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}

async function getUserById(req,res){
    try {
        if(req.params.id === undefined || req.params.id === '') throw 'user id not found! or empty!';

        let user = await UserModel.findOne({id:req.params.id})
        res.status(200).json({user,success:true})
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}



module.exports = {
    getTokenUser,
    getUsers,
    getUserById,


    ...require('./login'),
    ...require('./register')
}