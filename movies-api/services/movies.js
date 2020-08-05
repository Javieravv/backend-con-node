/**
 * Implementanos una capa de servicios.
 */

// const { moviesMock } = require("../utils/mocks/movies");
const MongoLib = require('../lib/mongo');

class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDb = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const movies = await this.mongoDb.getAll(this.collection, query);
        return movies || [];  // retornamos películas o un array vacío
    }

    async getMovie({ movieId }) {
        const movie = await this.mongoDb.get(this.collection, movieId);
        return movie || {};  // retornamos películas o un array vacío
    }

    async createMovie({ movie }) {
        const createMovieId = await this.mongoDb.create(this.collection, movie);
        return createMovieId;
    }

    async updateMovie({ movieId, movie } = {}) {
        const uptdatedMovieId = await this.mongoDb.update(this.collection, movieId, movie);
        return uptdatedMovieId;
    }

    async deleteMovie({ movieId }) {
        const deletedMovieId = await this.mongoDb.delete(this.collection, movieId);
        return deletedMovieId;
    }

    // async replaceMovie() {
    //     const replaceMovieId = await Promise.resolve(moviesMock[0].id);
    //     return replaceMovieId;
    // }
}

module.exports = MoviesService;