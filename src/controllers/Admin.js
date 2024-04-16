//Gastos diferidos fecha de pago?
//Ingresos no cobrados
//Pacientes del mes e inporte cobrado y no cobrado ordenados por total de mayor a menor
const { Bill, Income} = require('../models/index')

const getDifBillsForMonth = async (req, res) => {
    try {
        const infoBills = await Bill.findAll();

        // Filtrar las facturas que tienen la propiedad 'diferido' establecida en 'true'
        const billsDif = infoBills.filter(b => b.diferido === "true");

        // Agrupar facturas por mes
        const monthlyGroups = billsDif.reduce((acc, bill) => {
            const { fecha, monto } = bill; // Cambio de 'amount' a 'monto' según la estructura de tus datos
            const monthYear = getMonthYearFromDate(fecha);

            // Convertir monto a un número válido
            const amount = parseFloat(monto); // Convertir 'monto' a un número decimal

            // Si ya existe el mes en el acumulador, se suma el monto, de lo contrario se inicializa
            acc[monthYear] = (acc[monthYear] || 0) + amount;

            return acc;
        }, {});

        // Aquí puedes hacer lo que quieras con el resultado, como enviarlo como respuesta HTTP
        res.json({ monthlyGroups });

    } catch (error) {
        // Manejo de errores
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Función para obtener el mes y año a partir de la fecha (dd/mm/año)
const getMonthYearFromDate = (fecha) => {
    const parts = fecha.split('/');
    const monthYear = `${parts[1]}/${parts[2]}`; // El índice 1 representa el mes y el índice 2 representa el año en el formato dd/mm/año
    return monthYear;
};

const getNotPayIncome = async (req, res) => {
    try {
    const infoIncomes = await Income.findAll();
    const notPayIncome = infoIncomes.filter(info => info.cobrado === "false");
    // Agrupar facturas por mes
    const monthlyGroups = notPayIncome.reduce((acc, income) => {
        const { fecha, monto } = bill; // Cambio de 'amount' a 'monto' según la estructura de tus datos
        const monthYear = getMonthYearFromDate(fecha);

        // Convertir monto a un número válido
        const amount = parseFloat(monto); // Convertir 'monto' a un número decimal

        // Si ya existe el mes en el acumulador, se suma el monto, de lo contrario se inicializa
        acc[monthYear] = (acc[monthYear] || 0) + amount;

        return acc;
    }, {});

    // Aquí puedes hacer lo que quieras con el resultado, como enviarlo como respuesta HTTP
    res.json({ monthlyGroups });

} catch (error) {
    // Manejo de errores
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}

module.exports = {
    getDifBillsForMonth,
    
}