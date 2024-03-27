const { Detail_income } = require('../models/index')


const getInAll = async (req, res) => {
  try {
    const info = await Detail_income.findAll()
    info? res.status(200).send(JSON.stringify(info)) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const getInById = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await Detail_income.findByPk(id)
    info? res.status(200).send(JSON.stringify(activos))
    : res.status(400).send({ message: 'No se encontraron datos' });
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
}

const addInc = async (req,res) => {
  try {
    const info = req.body
    const newInfo = await Detail_income.create(info)
    newInfo? res.status(200).send({ message: 'Ingreso agregado correctamente' }) : res.status(400).send({ message: 'No se pudo guardar el ingreso' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteInc = async (req, res, next) => {
  try {
  const id = req.params.id
  const deleteInfo = await Detail_income.destroy({
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
    getInAll,
    getInById,
    addInc,
    deleteInc
}