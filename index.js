var Hapi = require('hapi')

var server = new Hapi.Server()

server.connection({ port: 4000})

server.route({
    method: 'GET',
    path: '/string',
    handler: function(request, reply) {
        reply('Hello')
    }
})

server.route({
    method: 'GET',
    path: '/json',
    handler: function(request, reply) {
        reply({
            'message': 'Hello'
        })
    }
})

server.register([
    {
        register: require('./my-first-plugin'),
        options: {
            greetings: 'Ni Hao'
        }
    },
    {
        register: require('good'),
        options: {
            reporters: {
                consoleReporter: [{
                    module: require('good-console')
                }, 'stdout']
            }
        }
    }
], (function(err) {
    if (err) {
        throw err
    }
    
    server.start(function(err) {
        if (err) {
            throw err
        }
        
        console.log('Server running at:', server.info.uri)
    })
    
}))

