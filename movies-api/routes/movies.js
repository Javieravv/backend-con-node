/**
 * Creamos las rutas para las películas y así manejarlas con la API.
 * Para pruebas se usa Postman.
 * 
 * Los mocks son datos falsos, generados en una herramienta web.
 * 
 */

const express = require('express');
const MoviesService = require('../services/movies');

// const { moviesMock } = require('../utils/mocks/movies');


// Esta función recibe una aplicación de express. Permite ser dinámicos y 
// ver qué aplicación va a consumir nuestra ruta

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  // instanciamos un nuevo servicio

  const moviesService = new MoviesService();

  router.get("/", async function (req, res, next) {
    try {
      // const movies = await Promise.resolve(moviesMock);
      const { tags } = req.query;
      const movies = await moviesService.getMovies({
        tags
      }); // lo traemos del servicio

      res.status(200).json({
        data: movies,
        message: 'Movies listed...!!'
      })
    } catch(err) {
      next(err);
    }
  });

  router.get("/:movieId", async function (req, res, next) {
    const { movieId } = req.params;
    try {
      // const movies = await Promise.resolve(moviesMock[0]);
      const movies = await moviesService.getMovie( { movieId });

      res.status(200).json({
        data: movies,
        message: 'Movie retrieved...!!'
      })
    } catch(err) {
      next(err);
    }
  });

  router.post("/", async function (req, res, next) {
    const { body: movie } = req;
    try {
      // const createdMovieId = await Promise.resolve(moviesMock[0].id);
      const createdMovieId = await moviesService.createMovie({  movie });
      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created...!!'
      });
    } catch(err) {
      next(err);
    }
  });

  router.put("/:movieId", async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      // const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      const updatedMovieId = await moviesService.updateMovie( { movieId, movie });

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated...!!'
      })
    } catch(err) {
      next(err);
    }
  });

  router.delete("/:movieId", async function (req, res, next) {
    const { movieId } = req.params;
    try {
      // const deleteddMovieId = await Promise.resolve(moviesMock[0].id);
      const deleteddMovieId = await moviesService.deleteMovie({ movieId });

      res.status(200).json({
        data: deleteddMovieId,
        message: 'Movie deleted...!!'
      })
    } catch(err) {
      next(err);
    }
  });

  router.patch("/:movieId", async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      // const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      const replacedMovieId = await moviesService.replaceMovie( { movieId, movie });

      res.status(200).json({
        data: replacedMovieId,
        message: 'Movie reeplaced...!!'
      })
    } catch(err) {
      next(err);
    }
  });

};

module.exports = moviesApi;
