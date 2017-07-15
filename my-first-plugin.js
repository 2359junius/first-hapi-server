const plugin = function(server, options, next) {
    server.route({
        method: 'GET',
        path: '/longstring',
        handler: function(request, reply) {
            if (options.greetings) return reply(options.greetings)
            reply('Hellloooooo')
        }
    })
    
    next()
}

plugin.attributes = {
    name: 'my first plugin'
}

module.exports = plugin