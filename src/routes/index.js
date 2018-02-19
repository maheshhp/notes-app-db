const getNotes = require('./getNotes');
const updateNotes = require('./getNotes');

module.exports = [].concat(
  getNotes,
  updateNotes,
);
