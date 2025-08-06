var express = require('express');
var router = express.Router();
const { Op } = require('sequelize');



const Sequelize = require('sequelize');
const { render } = require('../app');
const Foto = require('../models').Foto;
const Etiqueta = require('../models').etiqueta;

router.get('/findAll/json',
    function (req, res, next) {
        Foto.findAll({
            attributes: { exclude: ["updatedAt"] },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }],
        })
            .then(fotos => {
                res.json(fotos);
            })
            .catch(error =>
                res.status(400).send(error))
    });

router.get('/findById/json',
    function (req, res, next) {
        const id = parseInt(req.query.id) || 0;

        Foto.findOne({
            where: { id: id },
            attributes: { exclude: ["updatedAt"] },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }]
        })
            .then(fotos => {
                res.json(fotos);
            })
            .catch(error =>
                res.status(400).send(error))
    });




router.get('/findAll/view', function (req, res, next) {

    Foto.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Etiqueta,
            attributes: ['texto'],
            through: { attributes: [] }
        }]
    })
        .then(fotos => {
            res.render('fotos', { title: 'Fotos', arrFotos: fotos });
        })
        .catch(error => res.status(400).send(error));
});


router.get('/findById/view', function (req, res, next) {
    const id = parseInt(req.query.id) || 0;

    if (id > 0) {
        Foto.findOne({
            where: { id: id },
            attributes: { exclude: ["updatedAt"] },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }]
        })
            .then(foto => {
                res.render('fotos', { title: 'Fotos', arrFotos: foto ? [foto] : [] });
            })
            .catch(error => {
                console.error(error);
                res.status(400).send(error.message);
            });
    } else {
        Foto.findAll({
            attributes: { exclude: ["updatedAt"] },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }]
        })
            .then(fotos => {
                res.render('fotos', { title: 'Fotos', arrFotos: fotos });
            })
            .catch(error => res.status(400).send(error));
    }
});

router.get('/findById/json',
    function (req, res, next) {

        Foto.findAll({
            attributes: { exclude: ["updatedAt"] },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }]
        })
            .then(fotos => {
                res.json(fotos);
            })
            .catch(error =>
                res.status(400).send(error))
    });


module.exports = router;


