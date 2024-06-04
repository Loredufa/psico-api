const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('bill', {
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
    diferido: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    fecha_dif: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  })
  };