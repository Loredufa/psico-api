const { parseTextWithOpenAI } = require('../services/openaiService');
const {addIncome} = require('./Ingresos')
const {addBill} = require('./Inicio')

const formatDateToDDMMYYYY = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-indexados.
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const gpt_bill_income = async (req, res) => {
  try {
    const { text } = req.body; // Asegúrate de que el cuerpo contiene el texto
    console.log('SOY TEXT', text);

    const data = await parseTextWithOpenAI(text);
    console.log('SOY DATA', data);

    const today = new Date();
    const formattedDate = formatDateToDDMMYYYY(today);
   
    if (data.type === 'bill') {
      const bill = {
        fecha: formattedDate,
        descripcion: data.descripcion,
        monto: data.monto,
        mensual: data.mensual,
        diferido: data.diferido,
        fecha_dif: data.fecha_dif
      };
      const billAdd = await addBill(bill);
      res.status(200).json(billAdd);
      return;
    }

    if (data.type === 'income') {
      const income = {
        fecha: formattedDate,
        descripcion: data.descripcion,
        monto: data.monto,
        mensual: data.mensual
      };
      const incomeAdd = await addIncome(income);
      res.status(200).json(incomeAdd);
      return;
    }
    if (data.type === 'otro') {
      const response = data.Respuesta || 'No se pudo procesar el texto.';
      res.status(200).json({ message: response });
      return;
    }

    res.json(data);
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send("Error procesando el texto.");
  }
};

module.exports = {
  gpt_bill_income,
};