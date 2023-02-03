const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('experience', {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        where: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        since: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        text: {
          type: DataTypes.TEXT,
          allowNull: false
        }
    },{
      timestamps: false
    })
}