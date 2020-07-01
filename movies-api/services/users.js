const MongoLib = require('../lib/mongo'); // los servicios de MongoDb
const bcrypt = require('bcrypt');  // crea password en modo hash

class UsersService {
    constructor() {
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }

    async getUser({ email }) {
        const [user] = await this.mongoDB.getAll(this.collection, { email });
        return user;
    }

    async createUser({ user }) {
        const { name, email, password } = user;
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUserId = await this.mongoDB.create(this.collection,
            {
                name,
                email,
                password: hashedPassword
            });

        console.log('EL USUARIO CREADO en createUser ES ', createUserId);
        return createUserId;
    }
};

module.exports = UsersService;