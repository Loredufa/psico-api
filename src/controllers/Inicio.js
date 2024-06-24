const { Bill } = require('../models/index')


const getAllBills = async (req, res) => {
  try {
    const info = await Bill.findAll()
    info? res.status(200).send(JSON.stringify(info)) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const getBillsById = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await Bill.findByPk(id)
    info? res.status(200).send(JSON.stringify(activos))
    : res.status(400).send({ message: 'No se encontraron datos' });
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
}

const addBill = async (info) => {
  try {
    const newInfo = await Bill.create(info);
    if (newInfo) {
      return {
        message: 'Gasto agregado correctamente',
        bill: newInfo
      };
    } else {
      throw new Error('No se pudo guardar el gasto');
    }
  } catch (error) {
    console.log("Algo salió mal: ", error);
    throw new Error('Error al guardar el gasto');
  }
};

const addBillForm= async (req, res) => {
  try {
    const info = req.body
    const createInfo = await Bill.create(info)
    createInfo? res.status(200).send({message:'Gasto creado correctamente'}) : 
    res.status(401).send({message:'No se crear el gasto'});
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const putBill= async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const updateInfo = await Bill.update(info, {
      where: {
        id,
      },
    })
    updateInfo[0] !== 0? res.status(200).send({message:'Gasto actualizado'}) : 
    res.status(401).send({message:'No se puede actualizar el gasto'});
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteBill = async (req, res, next) => {
  try {
  const id = req.params.id
  const deleteInfo = await Bill.destroy({
    where: {
      id,
    },
  })
  deleteInfo? res.status(200).send({message:'Gasto eliminado'}) :
  res.status(401).send({message:'No se pudo eliminar el gasto'}) 
  }
  catch (error) { console.log("Algo salio mal: ", error); 
}
}

module.exports = {
  deleteBill,
  putBill,
  addBill,
  getBillsById,
  getAllBills,
  addBillForm
}