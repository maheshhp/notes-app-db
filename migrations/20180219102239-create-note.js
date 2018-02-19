module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Notes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    noteId: {
      type: Sequelize.INTEGER,
    },
    noteTitle: {
      type: Sequelize.STRING,
    },
    noteText: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Notes'),
};
