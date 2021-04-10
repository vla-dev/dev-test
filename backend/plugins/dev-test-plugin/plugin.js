'use strict';
const Handlers      = require('./handlers');

exports.plugin = {
    pkg: require('../../package.json'),
    register: async (server, options) => {

        server.route({
            method: 'GET',
            path: '/check-mongo-connection',
            handler: Handlers.checkMongoConnection(options)
        });

        server.route({
            method: 'GET',
            path: '/get-aggregation',
            handler: Handlers.getAggregation(options)
        });

        server.route({
            method: 'POST',
            path: '/generate-dummy',
            handler: Handlers.generateData(options)
        });
    }
};