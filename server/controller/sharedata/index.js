const {
  ShareDataModel,
  shareData_fields,
} = require("../../model/mongodb/WebnovelModel");

async function getAll(req, res) {
  try {
    let shareDataFiles = await ShareDataModel.find().sort({ [shareData_fields.DATE]: -1 });
    res.status(200).json({ shareDataFiles });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function addOne(req, res) {
  try {
    if (req.body === undefined) throw "reqest body not found!";
    if (req.body.title === undefined || req.body.title === "")
      throw "'title' not found or empty!";
    let foundShare = await ShareDataModel.findOne({
      [shareData_fields.TITLE]: req.body.title,
    });
    if (foundShare !== null) throw "sharData title already exists";
    //not exists
    let newShare = new ShareDataModel(req.body);
    newShare.save();

    res.status(201).json({ shareData: newShare, success: true });
  } catch (error) {
    res.status(500).json({ error, success: false });
  }
}

async function updateOne(req, res) {
  try {
    if (req.params.id === undefined || req.params.id === "")
    throw 'params "id" not found or empty!';
    if (req.body === undefined) throw "reqest body not found!";

    await ShareDataModel.updateOne({id:req.params.id},req.body)

    res.status(200).json({id:req.params.id,shareData:req.body,success:true})

  } catch (error) {
    res.status(500).json({ error, success: false });
  }
}

async function deleteOne(req, res) {
  try {
      let search = {key:'id',value:null}

      if(req.query.search === undefined || req.query.search === "") throw `"req.query.search" not found or empty`

      let query = req.query.search.split(',');
      if(query.length !== 2) throw `search query not found "key" or "value"`;
      search.key = query[0];
      search.value = query[1];

      await ShareDataModel.deleteOne({[search.key]:[search.value]})
      
      res.status(200).json({[search.key]:search.value,success:true})

  } catch (error) {
    res.status(500).json({ error, success: false });
  }
}

async function deleteById(req, res) {
  try {
    if (req.params.id === undefined || req.params.id === "")
      throw 'params "id" not found or empty!';

      await ShareDataModel.deleteById(req.params.id)
      
      res.status(200).json({id:req.params.id,success:true})

  } catch (error) {
    res.status(500).json({ error, success: false });
  }
}

module.exports = {
  getAll,
  updateOne,
  addOne,
  deleteById,
  deleteOne,
};
