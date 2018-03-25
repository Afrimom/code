'use strict';

module.exports =  {
    register: require('good'),
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    // Log everything
                    Log: '*',
                    //Only log out responses tagged with `api` (prevent) 
                    response: ['api', 'ops']
                }]
            },{
                module: 'good-console'
            }, 'stdout']
        }
    }
};