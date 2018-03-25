'use strict';

const WebsiteMessage = require('../models/websiteMessage'),
      joi = require('joi');

const insertWebsiteMessage = (request, reply) => {
    let message = new WebsiteMessage();
    message.phone_number = request.payload.phoneNumber;
    message.email = request.payload.email;
    message.message = request.payload.message;
    message.full_name = request.payload.fullName;
    message.save((err) => {
        if (err) {
            reply({'error': err.message});
        } else {
            reply({'message': 'Message sent.'});
        }
    })
};

module.exports = {
    insertWebsiteMessage
};
