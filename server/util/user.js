const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRound = 10;
const tokenSecretKey = 'hello-than'
const tokenExpireIn = 60 * 60;

function hashPass(pass){
    let salt = bcrypt.genSaltSync(saltRound);
    let hash = bcrypt.hashSync(pass,salt)
    return hash;
}

function comparePass(pass,hash){
    return bcrypt.compareSync(pass,hash)
}


function tokenSign(data,expiresIn=tokenExpireIn){
    let token = jwt.sign({data},tokenSecretKey,{expiresIn})
    return token;
}

function tokenVerify(token){
    let decode = jwt.verify(token,tokenSecretKey);
    return decode;
}


module.exports = {
    hashPass,
    comparePass,
    tokenSign,
    tokenVerify

}