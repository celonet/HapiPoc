const User = require('./model/user');

module.exports = [
    {
        method: 'GET',
        path: '/hello',
        handler: function (req, h) {
            return 'hello world';
        }
    },
    {
        method: 'GET',
        path: '/api/user',
        handler: function (request, reply) {
            User.find(function (error, users) {
                console.log(users);
            });
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/api/wolves/{name}',
        handler: function (request, reply) {
            const User = new User({
                username: request.params.name,
                email: request.params.email
            });
            User.save(function (error, user) {
                if (error) {
                    console.error(error);
                }
                reply(user.id);
            });
        }
    }
];