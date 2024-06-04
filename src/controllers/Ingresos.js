const { Income } = require('../models/index')


const getAllIncomes = async (req, res) => {
  try {
    const info = await Income.findAll()
    info? res.status(200).send(JSON.stringify(info)) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const getIncomeById = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await Income.findByPk(id)
    info? res.status(200).send(JSON.stringify(activos))
    : res.status(400).send({ message: 'No se encontraron datos' });
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
}

const addIncome = async (info) => {
  try {
    const newInfo = await Income.create(info);
    if (newInfo) {
      return {
        message: 'Ingreso agregado correctamente',
        income: newInfo
      };
    } else {
      throw new Error('No se pudo guardar el ingreso');
    }
  } catch (error) {
    console.log("Algo salió mal: ", error);
    throw new Error('Error al guardar el ingreso');
  }
};

const putIncome= async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const updateInfo = await Income.update(info, {
      where: {
        id,
      },
    })
    updateInfo[0] !== 0? res.status(200).send({message:'Ingreso actualizado'}) : 
    res.status(401).send({message:'No se puede actualizar el ingreso'});
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteIncome = async (req, res, next) => {
  try {
  const id = req.params.id
  const deleteInfo = await Income.destroy({
    where: {
      id,
    },
  })
  deleteInfo? res.status(200).send({message:'Ingreso eliminado'}) :
  res.status(401).send({message:'No se pudo eliminar el ingreso'}) 
  }
  catch (error) { console.log("Algo salio mal: ", error); 
}
}

module.exports = {
    getAllIncomes,
    getIncomeById,
    addIncome,
    putIncome,
    deleteIncome
}