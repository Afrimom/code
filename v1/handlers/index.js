'use strict';

const requireDirectory = require('require-directory');

//An index files files for the handlers, replacing the '-hanlder' portion of the files
module.exports = requireDirectory(module, {rename: name => name.replace('-handler', '')});