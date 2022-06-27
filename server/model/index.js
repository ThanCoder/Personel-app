//mongoose
const UserModel = require('./mongodb/UserModel')
const WebNovelModel = require('./mongodb/WebnovelModel')
const ApyarModel = require('./mongodb/ApyarModel')
const MovieModel = require('./mongodb/MovieModel')


module.exports = {
    ...UserModel,
    ...WebNovelModel,
    ...ApyarModel,
    ...MovieModel
}