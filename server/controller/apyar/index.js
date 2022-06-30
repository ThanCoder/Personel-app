const { ApyarModel, apyar_fields } = require("../../model");

async function getAll(req, res) {
  try {
    let limit = {
      start: 1,
      length: 15,
    };
    //limit
    if (req.query.limit !== undefined && req.query.limit !== "") {
      let limitQuery = req.query.limit.split(",");
      if (limitQuery.length == +1) {
        limit.length = limitQuery[0];
      }
      if (limitQuery.length === 2) {
        limit.start = limitQuery[0];
        limit.length = limitQuery[1];
      }
    }
    let calcStart = Math.round((limit.start * limit.length) - limit.length);

    let apyars = await ApyarModel.find()
      .skip(calcStart)
      .limit(limit.length)
      .sort({ [apyar_fields.DATE]: -1 });
    res.status(200).json({ length: apyars.length, apyars, success: true });
  } catch (error) {
    res.status(500).json({ error, success: false });
  }
}

async function getOne(req, res) {
  try {
    let key = null;
    let val = null;
    let apyar = null;
    if (req.query.search === undefined) {
      apyar = await ApyarModel.findOne().sort({ [apyar_fields.DATE]: -1 });
    } else {
      if (req.query.search === "") throw `'query.search' not found or empty`;
      let searchArr = req.query.search.split(",");
      if (searchArr[0] === undefined || searchArr[1] === undefined)
        throw `'key' or 'value' not found or empty`;
      key = searchArr[0];
      val = searchArr[1];
      apyar = await ApyarModel.findOne({ [key]: [val] });
    }
    res.status(200).json({ apyar, success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function addOne(req, res) {
  try {
    if (req.body === undefined) throw "req.body not found!";
    if (req.body.title === undefined || req.body.title === "")
      throw `'title' not found or empty`;
    //find already
    const findApyar = await ApyarModel.findOne({ title: req.body.title });

    //check
    if (findApyar !== null) throw `'title' already exists`;

    let newApyar = new ApyarModel(req.body);
    newApyar.save();

    res.status(201).json({ apyar: newApyar, success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateOne(req, res) {
  try {
    if (req.params.id === undefined || req.params.id === "")
      throw `req.params.id not found or empty`;
    if (req.body === undefined) throw "req.body not found!";

    await ApyarModel.updateOne({ id: req.params.id });
    res
      .status(200)
      .json({ apyar: { ...req.body, id: req.params.id }, success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteOne(req, res) {
  try {
    if (req.params.id === undefined || req.params.id === "")
      throw `req.params.id not found or empty`;

    await ApyarModel.deleteOne({ id: req.params.id });

    res.status(200).json({ success: true, id: req.params.id });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAll,
  getOne,
  addOne,
  deleteOne,
  updateOne,
};
