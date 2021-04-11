'use strict';
const Mongo     = require('./mongo/database');
const Hapi      = require('@hapi/hapi');

const init = async () => {
    const dbConnection = Mongo.connect({
        url: "mongodb://mongo-db/database",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    })

    const server = Hapi.server({
        port: 8090,
        host: process.env.SERVER_HOST 
    });

    await server.register({
        plugin: require('./plugins/dev-test-plugin/plugin'),
        options: {
            name: 'Dev Test Plugin',
            dbConnection
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
