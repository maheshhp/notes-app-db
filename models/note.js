module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    noteKey: DataTypes.INTEGER,
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
