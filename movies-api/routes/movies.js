/**
 * Creamos las rutas para las películas y así manejarlas con la API.
 * Para pruebas se usa Postman.
 * 
 * Los mocks son datos falsos, generados en una herramienta web.
 * 
 * TAmbién agregamos caché, pero solo a aquellos que obtienen recursos. Como los get
 * No a los Post
 * 
 */

const express = require('express');
const passport = require('passport');
const MoviesService = require('../services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');

const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time.js');

// estrategia de JWT
require('../utils/auth/strategies/jwt');

// const { moviesMock } = require('../utils/mocks/movies');


// Esta función recibe una aplicación de express. Permite ser dinámicos y 
// ver qué aplicación va a consumir nuestra ruta

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  // instanciamos un nuevo servicio

  const moviesService = new MoviesService();

  router.get("/",
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      // const movies = await Promise.resolve(moviesMock);
      // el tiempo de caché se debe determinar en la lógica de negocios.
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;

      try {
        const movies = await moviesService.getMovies({ tags }); // lo traemos del servicio
        // throw new Error("ESTE ES UN ERROR EN GETTING MOVIES...");

        res.status(200).json({
          data: movies,
          message: 'Movies listed...!!'
        })
      } catch (err) {
        next(err);
      }
    }
  );

  router.get("/:movieId",
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'), async function (req, res, next) {
      // Le agregamos caché
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        // const movies = await Promise.resolve(moviesMock[0]);
        const movies = await moviesService.getMovie({ movieId });

        res.status(200).json({
          data: movies,
          message: 'Movie retrieved...!!'
        })
      } catch (err) {
        next(err);
      }
    });

  router.post("/",
    passport.authenticate('jwt', { session: false }),
    validationHandler(createMovieSchema), async function (req, res, next) {
      const { body: movie } = req;
      try {
        // const createdMovieId = await Promise.resolve(moviesMock[0].id);
        const createdMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createdMovieId,
          message: 'Movie created...!!'
        });
      } catch (err) {
        next(err);
      }
    });

  router.put("/:movieId",
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'), validationHandler(updateMovieSchema), async function (req, res, next) {
      const { body: movie } = req;
      const { movieId } = req.params;
      try {
        // const updatedMovieId = await Promise.resolve(moviesMock[0].id);
        const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

        res.status(200).json({
          data: updatedMovieId,
          message: 'Movie updated...!!'
        })
      } catch (err) {
        next(err);
      }
    });

  router.delete("/:movieId",
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'), async function (req, res, next) {
      const { movieId } = req.params;
      try {
        // const deleteddMovieId = await Promise.resolve(moviesMock[0].id);
        const deleteddMovieId = await moviesService.deleteMovie({ movieId });

        res.status(200).json({
          data: deleteddMovieId,
          message: 'Movie deleted...!!'
        })
      } catch (err) {
        next(err);
      }
    });

  router.patch("/:movieId", async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      // const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      const replacedMovieId = await moviesService.replaceMovie({ movieId, movie });

      res.status(200).json({
        data: replacedMovieId,
        message: 'Movie reeplaced...!!'
      })
    } catch (err) {
      next(err);
    }
  });

};

module.exports = moviesApi;
