'use strict';

const Hapi = require('hapi'),
      mongoose = require('mongoose'),
      Boom = require('boom'),
      plugins = require('./modules/plugins'),
      secret = require('./config').secret,
      // Afrimom mobile routes
      websiteMessageRoutes = require('./v1/routes/website-message-routes');


mongoose.connect('mongodb://Afrimom:fint263mom@ds223609.mlab.com:23609/afrimom', { useMongoClient: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));

//Create the server
const server = new Hapi.Server();
server.connection({host: 'localhost', port: 7777});

//Register all plugins
server.register(plugins, (err) => {
    if (err) {
        console.error(err);
        return reject(err);
    }

    server.views({
        engines: {
            handlebars: {
                module: require('handlebars')
            }
        },
        relativeTo: __dirname,
        path: 'website'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.view('index');
        }
    });

    server.route({
        method: 'GET',
        path: '/*',
        handler: (request, reply) => {
            return reply.view('index');
        }
    });

    server.route({
        method: 'GET',
        path: '/{files*}',
        handler: {
           directory: {
            path: __dirname
           }
        }
    });

    // We're giving the strategy both a name and schema of 'jwt'
    server.auth.strategy('jwt', 'jwt', {
        key: secret,
        verifyOptions: { algorithms: ['HS256'] }
    });

    //Initialize Nethood routes
    server.route(websiteMessageRoutes(server));

    //Start accepting requests
    server.start((err) => {
        if (err) {
            console.error(err);
        }

        //Server start successfully - register routes
        console.log(`Server running at: ${server.info.uri}`);
    });

    server.on('request-error', (req, err) => {
        console.error(err);
    });
});
