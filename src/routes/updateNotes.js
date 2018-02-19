const Models = require('../../models');

const updateNotesInDB = (noteObjectArray) => {
  const dbInsertPromises = [];
  noteObjectArray.forEach((noteObject) => {
    dbInsertPromises.push(Models.Note.upsert({
      noteTitle: noteObject.noteTitle,
      noteText: noteObject.noteText,
    }, {
      where: {
        noteId: noteObject.noteId,
      },
    }));
  });
  return Promise.all(dbInsertPromises);
};

module.exports = [
  {
    method: 'POST',
    path: '/notes/update',
    handler: (request, response) => {
      updateNotesInDB(request.payload).then((updateResponse) => {
        console.log(updateResponse);
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
