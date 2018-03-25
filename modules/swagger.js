'use strict';

const pkg = require('../package.json');

module.exports =  {
    register: require('hapi-swagger'),
    options: {
        info: {
            title: 'Noxi hapi-swagger documentation',
            description: `This is an API for NOXI 
                          To see all routes, [click here](/documentation).
                          To see V1 routes only, [click here](/?tags=v1).
                          To view the swagger.json, [click here](/swagger.json).`,
                          // Get the version from package.json
            version: pkg.version,
            contact: {
                name: 'Munashe Taredzera',
                url: 'https://noxi.com/developer'
            },
            license: {
                // Get the license from package.json
                name: pkg.license
            }
        },
        //Setup the documentation to be the /documentation of this host
        documentationPath: '/documentation',
        jsonEditor: true,
        tags: [{
            'name': 'noxi',
            'description': 'Working with Mobile apps data.'
        }],
        //This is for use of grouping together paths. Since each of our paths begin with `/api/v{1,2}`, we want to ignore those first arguments in the path, since they won't help us group together resources
        pathPrefixSize: 2,
        //This is also used for grouping, though because of the lene above, I don't believe that this line may be needed seems to work with/without it.
        basePath: '/api/',
        //Also used for grouping paths together
        pathReplacements: [{
            //Replace the version in all paths
            replaceIn: 'groups',
            pattern: /v([0-9]+)\//,
            replacement: ''
        },{
            //This allows grouping to inclide plural forms of the noun (ie `house` in the group `houses`)
            replaceIn: 'groups',
            pattern: /s$/,
            replacement: ''
        }, {
            // Group all house related routes together
            replaceIn: 'groups',
            pattern: /\/(houses)/,
            replacement: '/houses'
        }]
    }
}