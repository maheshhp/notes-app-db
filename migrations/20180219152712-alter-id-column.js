
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('Notes', 'noteId', 'noteKey'),

  down: (queryInterface, Sequelize) => queryInterface.renameColumn('Notes', 'noteKey', 'noteId'),
};
