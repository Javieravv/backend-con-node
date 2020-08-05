const joi = require ('@hapi/joi');

// importamos el esuema del Id de las películas que ya está creado
const { movieIdSchema } = require('./movies');
const { userIdSchema } = require ('./users');
const userMovieIdSchema = joi.string().regex (/^[0-9a-fA-F]{24}/);

const createUserMovieSchema = {
    userId: userIdSchema,
    movieId: movieIdSchema
};

module.exports = {
    userMovieIdSchema,
    createUserMovieSchema
};
