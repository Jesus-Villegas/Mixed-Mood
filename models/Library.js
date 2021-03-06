const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection")


class Library extends Model {}

Library.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    }
  },
  song_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'song',
        key: 'id',
      }

  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'library',  
});

module.exports = Library;
