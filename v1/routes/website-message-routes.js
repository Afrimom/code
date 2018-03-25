'use strict';

const handlers = require('../handlers'),
      joi = require('joi');

//Passing in server
const routes = (server) => [
    {
        method: 'POST',
        path: '/website/client/messages',
        config: {
            handler: handlers.websiteMessage.insertWebsiteMessage
        }
    }
]

module.exports = routes;