const MongoLib = require('../lib/mongo');

class UserMoviesService {
    constructor() {
        this.collection = 'user-movies';
        this.mongoDB = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.mongoDB.getAll(this.collection, query);
        return userMovies || [];
    }

    async createUserMovie({ userMovie }) {
        console.log('CREAMOS PELÍCULA PARA USUARIO...OK');
        const createdUserMovieId = await this.mongoDB.create(this.collection, userMovie);
        console.log('LA PELÍCULA CREADA ES....', createdUserMovieId);
        return createdUserMovieId;
    }

    async deleteUserMovie({ userMovieId }) {
        console.log('INTENTAMOS BORRAR. EL USERMOVIEID ES...', userMovieId);
        const deletedUserMovieId = await this.mongoDB.delete(
            this.collection,
            userMovieId
        );
        return deletedUserMovieId;
    }
};

module.exports = UserMoviesService;
