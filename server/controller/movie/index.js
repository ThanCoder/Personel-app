const { MovieModel } = require('../../model')


async function getAll(req,res){
    try {
        let movies = await MovieModel.find().sort({date:-1})

        res.status(200).json({movies,success:true})
    } catch (error) {
        res.status(500).json({error,success:true})
    }
}


async function getOne(req,res){
    try {
        
    } catch (error) {
        res.status(500).json({error})
    }
}

async function addOne(req,res){
    try {
        
    } catch (error) {
        res.status(500).json({error})
    }
}

async function updateOne(req,res){
    try {
        
    } catch (error) {
        res.status(500).json({error})
    }
}

async function deleteOne(req,res){
    try {
        
    } catch (error) {
        res.status(500).json({error})
    }
}





module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    updateOne
}