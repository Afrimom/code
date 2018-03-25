'use strict';

const Inert = require('inert'),
      Vision = require('vision'),
      Good = require('./good'),
      Blipp = require('blipp'),
      swagger = require('./swagger');

module.exports = [Inert, Vision, require('hapi-auth-jwt'), swagger, Good, Blipp]