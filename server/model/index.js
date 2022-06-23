//mongoose
const UserModel = require('./mongodb/UserModel')
const WebNovelModel = require('./mongodb/WebnovelModel')
const ApyarModel = require('./mongodb/ApyarModel')


module.exports = {
    ...UserModel,
    ...WebNovelModel,
    ...ApyarModel
}