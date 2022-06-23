const { NovelAppModel,novel_app_fields } = require('../../model');

async function getAll(req,res){
    try {
        let apps = await NovelAppModel.find().sort({date:-1});
        
        res.status(200).json({apps,success:true})
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}


async function getLatest(req,res){
    try {
        let app = await NovelAppModel.findOne().sort({date:-1});
        
        res.status(200).json({app,success:true})
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}

async function add(req,res){
    try {
        if(req.body === undefined || req.body === '') throw `"req.body" not found or empty!`;
        //if(req.body.title === undefined || req.body.title === '') throw 'title not found or empty!'
        if(req.body[novel_app_fields.FILE_URL] === undefined || req.body[novel_app_fields.FILE_URL] === '') throw `"${novel_app_fields.FILE_URL}" not found or empty!`;

        if(req.body[novel_app_fields.VERSION_CODE] === undefined || req.body[novel_app_fields.VERSION_CODE] === '') throw `"${novel_app_fields.VERSION_CODE}" not found or empty!`
        let isFound = await NovelAppModel.findOne({[novel_app_fields.VERSION_CODE]:req.body[novel_app_fields.VERSION_CODE]});

        if(isFound !== null) throw `"${novel_app_fields.VERSION_CODE}" already exists!`
        
        let newApp = new NovelAppModel(req.body)
        newApp.save()

        res.status(201).json({newApp,success:true})
        
    } catch (error) {
        res.status(500).json({error,success:false})
    }
}

async function deleteOne(req,res){
    try {
        if(req.params.id === undefined || req.params.id === '') throw 'req.params.id not found or empty!';

        await NovelAppModel.deleteOne({id:req.params.id})

        res.status(200).json({id:req.params.id,success:true})
        
    } catch (error) {
        res.status(500).json({error,id:req.params.id,success:false})
    }
}



module.exports = {
    getAll,
    getLatest,
    delete:deleteOne,
    add
}