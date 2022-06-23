const { user_fields,UserModel } = require('../../model');

async function register(req,res){
    try {
        res.send('register')
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}



module.exports = {
    register
}