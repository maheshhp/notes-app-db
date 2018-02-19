module.exports = [
  {
    method: 'POST',
    path: '/notes/update',
    handler: (request, response) => {
      response({
        statusCode: 200,
        message: 'O notes',
      });
    },
  },
];
