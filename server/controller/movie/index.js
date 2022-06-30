const { MovieModel, movie_fields } = require("../../model");

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

    let movies = await MovieModel.find()
      .skip(calcStart)
      .limit(limit.length)
      .sort({ date: -1 });

    res.status(200).json({ movies, success: true });
  } catch (error) {
    res.status(500).json({ error, success: true });
  }
}

async function getById(req, res) {
  try {
    if(req.params.id === undefined || req.params.id === '') throw `"req.params.id not found or empty"`

    const movie = await MovieModel.findById(req.params.id)

    res.status(200).json({ movie, success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}


async function getOne(req, res) {
  try {
    let key = null;
    let val = null;
    let movie = null;
    if (req.query.search === undefined) {
      movie = await MovieModel.findOne().sort({ [movie_fields.DATE]: -1 });
    } else {
      if (req.query.search === "") throw `'query.search' not found or empty`;
      let searchArr = req.query.search.split(",");
      if (searchArr[0] === undefined || searchArr[1] === undefined)
        throw `'key' or 'value' not found or empty`;
      key = searchArr[0];
      val = searchArr[1];

      movie = await MovieModel.findOne({ [key]: [val] });
    }
    res.status(201).json({ movie, success: true });
  } catch (error) {
    res.status(500).json({ error, success: false });
  }
}

async function addOne(req, res) {
  try {
    if (req.body === undefined) throw "req.body not found!";
    if (req.body.title === undefined || req.body.title === "")
      throw `'title' not found or empty`;
    //find already
    const findMovie = await MovieModel.findOne({ title: req.body.title });

    //check
    if (findMovie !== null) throw `'title' already exists`;

    let newMovie = new MovieModel(req.body);
    newMovie.save();

    res.status(201).json({ movie: newMovie, success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateOne(req, res) {
  try {
    if (req.params.id === undefined || req.params.id === "")
      throw `req.params.id not found or empty`;
    if (req.body === undefined) throw "req.body not found!";

    await MovieModel.updateOne({ id: req.params.id });
    res
      .status(200)
      .json({ movie: { ...req.body, id: req.params.id }, success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteOne(req, res) {
  try {
    if (req.params.id === undefined || req.params.id === "")
      throw `req.params.id not found or empty`;

    await MovieModel.deleteOne({ id: req.params.id });

    res.status(200).json({ success: true, id: req.params.id });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAll,
  getOne,
  getById,
  addOne,
  deleteOne,
  updateOne,
};
