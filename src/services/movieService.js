const { movieModel } = require('../models');

const getMovies = async (query) => {
  try {
    return await movieModel.find(query);
  } catch(e) {
    throw new Error(e.message);
  }
}

const createMovie = async (movie) => {
  try {
    return await movieModel.save(movie);
  } catch(e) {
    throw new Error(e.message);
  }
};

const updateMovie = async (id, movie) => {
  try {
    return await movieModel.findByIdAndUpdate(id, movie);
  } catch(e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getMovies, 
  createMovie,
  updateMovie
};
