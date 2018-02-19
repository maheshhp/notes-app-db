const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server();
let portNo;

if (process.env.NODE_ENV) {
  portNo = process.env.PORT || 8080;
}

server.connection({
  port: portNo,
  host: 'localhost',
});

server.route(routes);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw (err);
    }
    console.log(`Server started at ${server.info.uri}`);
  });
}

module.exports = server;
