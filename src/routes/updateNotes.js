const Models = require('../../models');

const updateNotesInDB = (noteObjectArray) => {
  const dbInsertPromises = [];
  JSON.parse(noteObjectArray).forEach((noteObject) => {
    if (noteObject !== null) {
      dbInsertPromises.push(Models.Note.findOrCreate({
        where: {
          noteKey: noteObject.noteKey,
        },
        defaults: {
          noteTitle: noteObject.noteTitle,
          noteText: noteObject.noteText,
          noteKey: noteObject.noteKey,
        },
      }).then(() => Models.Note.update({
        noteTitle: noteObject.noteTitle,
        noteText: noteObject.noteText,
      }, {
        where: {
          noteKey: noteObject.noteKey,
        },
      })));
    }
  });
  return Promise.all(dbInsertPromises);
};

module.exports = [
  {
    method: 'POST',
    path: '/notes/update',
    handler: (request, response) => {
      console.log(request.payload);
      updateNotesInDB(request.payload).then((updateResponse) => {
        response({
          statusCode: 201,
          message: updateResponse,
        });
      }).catch((error) => {
        response({
          statusCode: 200,
          message: error,
        });
      });
    },
  },
];
