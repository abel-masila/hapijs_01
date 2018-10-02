import Hapi from 'hapi';

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, h) => {
    return 'Hello, world!';
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
init();
