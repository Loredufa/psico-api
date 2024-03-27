const {Sequelize} = require('sequelize')
const {dbUser, dbName, dbPassword, dbHost} = require('../utils/config')
const Bills = require('./Bill')
const Incomes = require('./Income')
const Detail_bills = require('./Detail_bill')
const Detail_incomes = require('./Detail_income')


const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
  pool: {
    max: 10, // Número máximo de conexiones en la piscina
    min: 0,  // Número mínimo de conexiones en la piscina
    acquire: 300000, // Tiempo máximo para adquirir una conexión en milisegundos
    idle: 300000, // Tiempo máximo que una conexión puede estar inactiva en milisegundos
  },
});

const Bill = Bills(sequelize)
const Income = Incomes(sequelize)
const Detail_bill = Detail_bills(sequelize)
const Detail_income = Detail_incomes(sequelize)



//Relaciones
//Travel.hasMany(Contract)
//Contract.belongsTo(Travel, { foreignKey: 'travelId' }); // coloca travelId en contract

Detail_bill.hasMany(Bill)
Bill.belongsTo(Detail_bill, { foreignKey: 'detailBillId' }); // coloca detail_bill_Id en Bill


//Passenger.belongsToMany(Login, {through : "Passenger_Login"});
//Login.belongsToMany(Passenger, {through : "Passenger_Login"}); //crea una tabla intermedia


module.exports = {
    conn: sequelize,
    Bill,
    Income,
    Detail_bill,
    Detail_income,
    sequelize
}