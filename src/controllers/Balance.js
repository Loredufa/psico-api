const { Bill, Income} = require('../models/index')
//Total cobrado al mes


const getTotalBillsForMonth = async (req, res) => {
    try {
      const infoBills = await Bill.findAll();
      
      // Agrupar los datos por mes y calcular la suma de montos
      const monthlyTotal = infoBills.reduce((acc, bill) => {
        // Separar los componentes de la fecha
        const [day, month, year] = bill.fecha.split('/');
        
        // Crear un objeto Date con los componentes separados
        const billDate = new Date(`${year}-${month}-${day}`);
        
        // Obtener mes y año de la fecha de la factura
        const monthYear = billDate.getMonth() + 1 + '-' + billDate.getFullYear();
        
        // Convertir el monto a un número decimal
        const amount = parseFloat(bill.monto);
        
        // Si ya existe el mes en el acumulador, se suma el monto, de lo contrario se inicializa
        acc[monthYear] = (acc[monthYear] || 0) + amount;
        
        return acc;
      }, {});
  
      // Formatear los datos en el formato deseado (array de objetos)
      const formattedData = Object.entries(monthlyTotal).map(([monthYear, total]) => {
        const [month, year] = monthYear.split('-');
        return { month, year, total };
      });
  
      // Verificar si se encontraron datos y enviar la respuesta correspondiente
      formattedData.length ? res.status(200).send(formattedData) : res.status(400).send({ message: 'No se encontraron datos' });
    } catch (error) {
      console.log("Algo salió mal: ", error);
      res.status(500).send({ message: 'Ocurrió un error en el servidor' });
    }
  };

  const getTotalIncomesForMonth = async (req, res) => {
    try {
      const infoIncomes = await Income.findAll();
      
      // Agrupar los datos por mes y calcular la suma de montos
      const monthlyTotal = infoIncomes.reduce((acc, income) => {
        // Separar los componentes de la fecha
        const [day, month, year] = income.fecha.split('/');
        
        // Crear un objeto Date con los componentes separados
        const incomeDate = new Date(`${year}-${month}-${day}`);
        
        // Obtener mes y año de la fecha de la factura
        const monthYear = incomeDate.getMonth() + 1 + '-' + incomeDate.getFullYear();
        
        // Convertir el monto a un número decimal
        const amount = parseFloat(income.monto);
        
        // Si ya existe el mes en el acumulador, se suma el monto, de lo contrario se inicializa
        acc[monthYear] = (acc[monthYear] || 0) + amount;
        
        return acc;
      }, {});
  
      // Formatear los datos en el formato deseado (array de objetos)
      const formattedData = Object.entries(monthlyTotal).map(([monthYear, total]) => {
        const [month, year] = monthYear.split('-');
        return { month, year, total };
      });
  
      // Verificar si se encontraron datos y enviar la respuesta correspondiente
      formattedData.length ? res.status(200).send(formattedData) : res.status(400).send({ message: 'No se encontraron datos' });
    } catch (error) {
      console.log("Algo salió mal: ", error);
      res.status(500).send({ message: 'Ocurrió un error en el servidor' });
    }
  };

  const getBillsbyNamexMouth = async (req, res) => {
    try {
      const infoBills = await Bill.findAll();
      
      // Agrupar los datos por mes y descripción de la factura
      const monthlyTotal = infoBills.reduce((acc, bill) => {
        // Separar los componentes de la fecha
        const [day, month, year] = bill.fecha.split('/');
        
        // Crear un objeto Date con los componentes separados
        const billDate = new Date(`${year}-${month}-${day}`);
        
        // Obtener mes y año de la fecha de la factura
        const monthYear = billDate.getMonth() + 1 + '-' + billDate.getFullYear();
        
        // Convertir el monto a un número decimal
        const amount = parseFloat(bill.monto);
        
        // Si ya existe el mes en el acumulador, se suma el monto y se agrupa por descripción
        if (!acc[monthYear]) {
          acc[monthYear] = {};
        }
        if (!acc[monthYear][bill.descripcion]) {
          acc[monthYear][bill.descripcion] = 0;
        }
        acc[monthYear][bill.descripcion] += amount;
        
        return acc;
      }, {});
  
      // Formatear los datos en el formato deseado (array de objetos)
      const formattedData = Object.entries(monthlyTotal).map(([monthYear, descriptions]) => {
        const [month, year] = monthYear.split('-');
        return { month, year, descriptions };
      });
  
      // Verificar si se encontraron datos y enviar la respuesta correspondiente
      formattedData.length ? res.status(200).send(formattedData) : res.status(400).send({ message: 'No se encontraron datos' });
    } catch (error) {
      console.log("Algo salió mal: ", error);
      res.status(500).send({ message: 'Ocurrió un error en el servidor' });
    }
}

const getIncomesbyNamexMouth = async (req, res) => {
  try {
    const infoIncomes = await Income.findAll();
    
    // Agrupar los datos por mes y descripción de la factura
    const monthlyTotal = infoIncomes.reduce((acc, income) => {
      // Separar los componentes de la fecha
      const [day, month, year] = income.fecha.split('/');
      
      // Crear un objeto Date con los componentes separados
      const incomeDate = new Date(`${year}-${month}-${day}`);
      
      // Obtener mes y año de la fecha de la factura
      const monthYear = incomeDate.getMonth() + 1 + '-' + incomeDate.getFullYear();
      
      // Convertir el monto a un número decimal
      const amount = parseFloat(income.monto);
      
      // Si ya existe el mes en el acumulador, se suma el monto y se agrupa por descripción
      if (!acc[monthYear]) {
        acc[monthYear] = {};
      }
      if (!acc[monthYear][income.descripcion]) {
        acc[monthYear][income.descripcion] = 0;
      }
      acc[monthYear][income.descripcion] += amount;
      
      return acc;
    }, {});

    // Formatear los datos en el formato deseado (array de objetos)
    const formattedData = Object.entries(monthlyTotal).map(([monthYear, descriptions]) => {
      const [month, year] = monthYear.split('-');
      return { month, year, descriptions };
    });

    // Verificar si se encontraron datos y enviar la respuesta correspondiente
    formattedData.length ? res.status(200).send(formattedData) : res.status(400).send({ message: 'No se encontraron datos' });
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Ocurrió un error en el servidor' });
  }
}

const getCurrentBillsMonth = async (req, res) => {
  try {
      const infoBills = await Bill.findAll();

      // Obtener la fecha actual
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Los meses van de 0 a 11

      // Filtrar solo las facturas del mes actual
      const billsForCurrentMonth = infoBills.filter(bill => {
          const [day, month, year] = bill.fecha.split('/');
          return parseInt(month) === currentMonth;
      });

      // Calcular el total de las facturas del mes actual
      const totalForCurrentMonth = billsForCurrentMonth.reduce((acc, bill) => {
          return acc + parseFloat(bill.monto);
      }, 0);

      // Construir el objeto de respuesta
      const response = {
          month: currentMonth.toString(), // Convertir a cadena
          year: currentDate.getFullYear().toString(), // Convertir a cadena
          total: totalForCurrentMonth
      };

      // Enviar la respuesta
      res.status(200).send(response);
  } catch (error) {
      console.log("Algo salió mal: ", error);
      res.status(500).send({ message: 'Ocurrió un error en el servidor' });
  }
};

const getCurrentIncomesMonth = async (req, res) => {
  try {
      const infoIncomes = await Income.findAll();

      // Obtener la fecha actual
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Los meses van de 0 a 11

      // Filtrar solo las facturas del mes actual
      const incomesForCurrentMonth = infoIncomes.filter(e => {
          const [day, month, year] = e.fecha.split('/');
          return parseInt(month) === currentMonth;
      });

      // Calcular el total de las facturas del mes actual
      const totalForCurrentMonth = incomesForCurrentMonth.reduce((acc, inc) => {
          return acc + parseFloat(inc.monto);
      }, 0);

      // Construir el objeto de respuesta
      const response = {
          month: currentMonth.toString(), // Convertir a cadena
          year: currentDate.getFullYear().toString(), // Convertir a cadena
          total: totalForCurrentMonth
      };

      // Enviar la respuesta
      res.status(200).send(response);
  } catch (error) {
      console.log("Algo salió mal: ", error);
      res.status(500).send({ message: 'Ocurrió un error en el servidor' });
  }
};

const getCurrentDeferidoBills = async (req, res) => {
  try {
    const infoBills = await Bill.findAll();

    // Obtener la fecha actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Los meses van de 0 a 11

    // Filtrar solo los gastos del mes actual y que tengan la propiedad diferido en true
    const billsForCurrentMonth = infoBills.filter(bill => {
      const [day, month, year] = bill.fecha.split('/');
      return parseInt(month) === currentMonth && bill.diferido === 'true';
    });

    // Calcular el total de los gastos del mes actual
    const totalForCurrentMonth = billsForCurrentMonth.reduce((acc, bill) => {
      return acc + parseFloat(bill.monto);
    }, 0);

    // Construir el objeto de respuesta
    const response = {
      month: currentMonth.toString(), // Convertir a cadena
      year: currentDate.getFullYear().toString(), // Convertir a cadena
      total: totalForCurrentMonth
    };

    // Enviar la respuesta
    res.status(200).send(response);
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Ocurrió un error en el servidor' });
  }
};

const getCurrentPendingIncome = async (req, res) => {
  try {
    const info = await Income.findAll();

    // Obtener la fecha actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Los meses van de 0 a 11

    // Filtrar solo los gastos del mes actual y que tengan la propiedad diferido en true
    const IncomesForCurrentMonth = info.filter(income => {
      const [day, month, year] = income.fecha.split('/');
      return parseInt(month) === currentMonth && income.cobrado === 'false';
    });

    // Calcular el total de los gastos del mes actual
    const totalForCurrentMonth = IncomesForCurrentMonth.reduce((acc, income) => {
      return acc + parseFloat(income.monto);
    }, 0);

    // Construir el objeto de respuesta
    const response = {
      month: currentMonth.toString(), // Convertir a cadena
      year: currentDate.getFullYear().toString(), // Convertir a cadena
      total: totalForCurrentMonth
    };

    // Enviar la respuesta
    res.status(200).send(response);
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Ocurrió un error en el servidor' });
  }
};



module.exports = {
    getTotalBillsForMonth,
    getTotalIncomesForMonth,
    getBillsbyNamexMouth,
    getIncomesbyNamexMouth,
    getCurrentBillsMonth,
    getCurrentIncomesMonth,
    getCurrentDeferidoBills,
    getCurrentPendingIncome
}