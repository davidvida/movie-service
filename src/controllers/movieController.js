const { movieService } = require('../services')

/*
 * call other imported services, or same service but different functions here if you need to
*/
const getMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getMovies(req.query);
    res.status(201).send(movies);
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
  postMovie,
  patchMovie
};
