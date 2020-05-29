/**
 * Creamos un mock para la librería de mongo db
 * Sinon cada vez que se crea un sturck nuevo les inyecta propiedades
 * para saber si fueron ya llamados 
 */

const sinon = require('sinon');
const { moviesMock, filteredMoviesMock } = require('./movies');
const getAllStub = sinon.stub();

getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock("Drama"));

const createStub = sinon.stub().resolves(moviesMock[0].id);

// creamos la clase mock de MongoLib

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query);
    };

    create(collection, data) {
        return createStub(collection, data);
    };
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};