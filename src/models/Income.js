const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('income', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    monto: {
      type: DataTypes.STRING,
      allowNull: true,
    },    
    mensual: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    facturado: {
      type:DataTypes.STRING,
      allowNull:true,
    },   
  })
  };