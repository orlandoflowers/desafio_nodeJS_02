const express = require('express');
const router = express.Router();
const path = require('path');
const {obtenerCanciones, agregarCancion, editarCancion, eliminarCancion} = require("../controllers/cancionesControllers")

//index.html
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/index.html')) ;
});

//get canciones
router.get('/canciones', async (req, res) => {
    obtenerCanciones(req,res)
});

// agregar cancion
router.post("/canciones", async (req, res) => {
    agregarCancion(req, res)
});

// editar cancion
router.put("/canciones/:id", async (req, res) => {
   editarCancion(req,res)
});

// eliminar cancion
router.delete("/canciones/:id", async (req, res) => {
   eliminarCancion(req,res)
});

module.exports = router;