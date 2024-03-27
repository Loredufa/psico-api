const { Detail_bill } = require('../models/index')


const getBAll = async (req, res) => {
  try {
    const info = await Detail_bill.findAll()
    info? res.status(200).send(JSON.stringify(info)) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const getBById = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await Detail_bill.findByPk(id)
    info? res.status(200).send(JSON.stringify(activos))
    : res.status(400).send({ message: 'No se encontraron datos' });
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
}

const addB = async (req,res) => {
  try {
    const info = req.body
    const newInfo = await Detail_bill.create(info)
    newInfo? res.status(200).send({ message: 'Gasto agregado correctamente' }) : res.status(400).send({ message: 'No se pudo guardar el gasto' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteB = async (req, res, next) => {
  try {
  const id = req.params.id
  const deleteInfo = await Detail_bill.destroy({
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
    getBAll,
    getBById,
    addB,
    deleteB
}