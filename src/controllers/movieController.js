const { movieService } = require('../services');
const groupObjectBy = require('../utils/groupObjectBy');

/*
 * call other imported services, or same service but different functions here if you need to
*/
const getMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getMovies(req.query);
    const moviesGrouped = groupObjectBy('genres', movies);
    res.status(201).send(moviesGrouped);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(400).send({message: e.message});
  }
}

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await movieService.getMovieById(id);
    res.status(201).send(movie);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(400).send({message: e.message});
  }
}

const postMovie = async (req, res, next) => {
  const movie = { ...req.body };
  try {
    const newMovie = await movieService.createMovie(movie);
    res.json(newMovie);
    res.status(201);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(400).send({message: e.message});
  }
}

const patchMovie = async (req, res, next) => {
  const { id } = req.params;
  const movie = { ...req.body };
  try {
    const newMovie = await movieService.updateMovie(id, movie);
    res.json(newMovie);
    res.status(201);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(405).send({message: e.message});
  }
}

module.exports = {
  getMovies,
  getMovieById,
  postMovie,
  patchMovie
};
