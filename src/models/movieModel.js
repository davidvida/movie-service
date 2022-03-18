const mongoose = require('../config/mongoDB');
const { Schema, Types } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'draft'
  },
  labels: [String],
  releaseDate: {
    type: Date,
    default: Date.now()
  },
},{
  versionKey: false
});

const MovieModel = mongoose.model('Movie', movieSchema);

const find = async () => {
  try {
    const findResult = await MovieModel.find({});
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
  save,
  findByIdAndUpdate
};
