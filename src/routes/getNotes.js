const Models = require('../../models');

const getNotesFromDB = () => Models.Note.findAll();

module.exports = [
  {
    method: 'GET',
    path: '/notes/all',
    handler: (request, response) => {
      getNotesFromDB().then((noteObjects) => {
        console.log(noteObjects);
        const formattedNoteObjects = [];
        noteObjects.forEach((noteObject) => {
          formattedNoteObjects.push({
            noteId: noteObject.noteId,
            noteText: noteObject.noteText,
            noteTitle: noteObject.noteText,
          });
        });
        response({
          statusCode: 200,
          message: `${formattedNoteObjects.length} notes fetched`,
          notes: formattedNoteObjects,
        });
      }).catch((err) => {
        response({
          statusCode: 200,
          message: err,
        });
      });
    },
  },
];
