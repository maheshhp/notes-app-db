const getNotes = require('./getNotes');
const updateNotes = require('./updateNotes');

module.exports = [].concat(
  getNotes,
  updateNotes,
);
