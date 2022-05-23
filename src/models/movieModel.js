const mongoose = require('../config/mongoDB');
const { Schema, Types } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'available'
  },
  genres: {
    type: [String],
    default: ["default"]
  },
  cast: {
    type: [String],
    default: [],
    required: true
  },
  year: {
    type: Number,
    default: (new Date()).getFullYear()
  },
  imageUrl: {
    type: String,
    default: "https://images.unsplash.com/photo-1647968370378-6b8b64e847d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80%22"
  },
  videoUrl: {
    type: String
  }
},{
  versionKey: false
});

const MovieModel = mongoose.model('Movie', movieSchema);

const find = async (query) => {
  let findParams = {};
  if (query.title) findParams = { ...findParams, title : { '$regex': query.title, '$options': 'i' }};
  try {
    const findResult = await MovieModel.find(findParams);
    return findResult;
  } catch(error) {
    console.log(error);
  }
}

const findById = async (id) => {
  try {
    const findResult = await MovieModel.findById(id);
    return findResult;
  } catch(error) {
    console.log(error);
  }
}

const save = async (movie) => {
  try {
    const newMovie = new MovieModel(movie);
    await newMovie.save();
    return newMovie;
  } catch(error) {
    throw new Error(error);
  }
};

const findByIdAndUpdate = async (id, movie) => {
  try {
    delete(movie._id);
    const movieUpdated = await MovieModel.findOneAndUpdate({_id: new Types.ObjectId(id)}, movie, {new: true});
    return movieUpdated;
  } catch(error) {
    throw new Error(error);
  }
};

module.exports = {
  find,
  findById,
  save,
  findByIdAndUpdate
};
