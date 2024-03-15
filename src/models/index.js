const {Sequelize} = require('sequelize')
const {dbUser, dbName, dbPassword, dbHost} = require('../utils/config')
const Bills = require('./Bill')


const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
  pool: {
    max: 10, // Número máximo de conexiones en la piscina
    min: 0,  // Número mínimo de conexiones en la piscina
    acquire: 300000, // Tiempo máximo para adquirir una conexión en milisegundos
    idle: 300000, // Tiempo máximo que una conexión puede estar inactiva en milisegundos
  },
});

const Bill = Bills(sequelize)



//Relaciones
//Travel.hasMany(Contract)
//Contract.belongsTo(Travel, { foreignKey: 'travelId' }); // coloca travelId en contract


//Passenger.belongsToMany(Login, {through : "Passenger_Login"});
//Login.belongsToMany(Passenger, {through : "Passenger_Login"}); //crea una tabla intermedia


module.exports = {
    conn: sequelize,
    Bill,
    sequelize
}