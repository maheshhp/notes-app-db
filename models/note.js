module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    noteId: DataTypes.INTEGER,
    noteTitle: DataTypes.STRING,
    noteText: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return Note;
};
