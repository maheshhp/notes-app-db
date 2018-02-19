module.exports = [
  {
    method: 'GET',
    path: '/notes/all',
    handler: (request, response) => {
      response({
        statusCode: 200,
        message: 'O notes',
      });
    },
  },
];
