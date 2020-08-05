const MongoLib = require('../lib/mongo');

class ApiKeysService {
    constructor() {
        this.collection = 'api-keys';
        this.mongoDB = new MongoLib();
    }

    // buscamos el ApiKey en la base de datos de MongoDb,
    // enn la colección apí-keys que debe estar creada
    // getAll es un métido de mongoDb
    async getApiKey({ token }) {
        const [apiKey] = await this.mongoDB.getAll(this.collection, { token } );
        return apiKey;
    }
};

module.exports = ApiKeysService;