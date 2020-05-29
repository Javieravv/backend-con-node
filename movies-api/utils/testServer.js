/**
 * Levantamos un servidor para pruebas.
 */

const express = require('express');
const supertest = require ('supertest');

function testServer (route) {
    // esta app es distinta a la principal
    const app = express();
    route(app);
    return supertest(app);
}

module.exports = testServer;