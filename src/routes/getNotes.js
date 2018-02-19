module.exports = [
  {
    method: 'GET',
    path: '/notes',
    handler: (request, response) => {
      response({
        statusCode: 200,
        message: 'O notes',
      });
    },
  },
];
