const assert = require('assert');

const buildMessage = require('../utils/buildMessage');

// con .only se asegura que solo se corra una suite de test determinada

describe.only ('utils - buildMessage', function () {
    describe ('when receives an entity and an action', function () {
        it ('should return the respective message', function () {
            const result = buildMessage('movie', 'create');
            const expected = 'movie created';
            assert.strictEqual(result, expected);
        });
    });

    describe ('when receives an entity and an action and is a list', function () {
        it ('should return the respective entity message with the entity in plural', function () {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected);
        })
    })
})