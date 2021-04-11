'use strict';
const Handlers      = require('./handlers');

exports.plugin = {
    pkg: require('../../package.json'),
    register: async (server, options) => {

        server.route({
            method: 'GET',
            path: '/api/check-mongo-connection',
            handler: Handlers.checkMongoConnection(options)
        });

        server.route({
            method: 'GET',
            path: '/api/get-aggregation',
            handler: Handlers.getAggregation(options)
        });

        server.route({
            method: 'POST',
            path: '/api/generate-data',
            handler: Handlers.generateData(options)
        });
    }
};