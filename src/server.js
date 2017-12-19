const Hapi = require('hapi');
const db = require('./database').db;

const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

const routes = require('./routes');
server.route(routes);

async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
}

start();