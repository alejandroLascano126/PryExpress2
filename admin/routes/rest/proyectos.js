var express = require('express');
var router = express.Router();  
const Proyecto = require('../../models').proyectos;

router.get('/findAll/json', function (req, res, next) {
  Proyecto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
    .then(proyecto => {
      res.json(proyecto);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

router.post('/save', function (req, res, next) {
  let { grupo, titulo, calificacion } = req.body;

  Proyecto.create({
    grupo: grupo,
    titulo: titulo,
    calificacion: calificacion,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(proyecto => {
    res.json(proyecto);
  }).catch(error => {
    console.error('Error al guardar el proyecto:', error); 
    res.status(400).send({ message: 'Error al guardar', error });
  }
  )
});


module.exports = router;