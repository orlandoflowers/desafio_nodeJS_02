const express = require('express');
const router = express.Router();
const fs = require("fs").promises;
const path = require('path');


// obtener canciones
const getCanciones = async () => {
    const fsResponse = await fs.readFile('canciones.json', 'utf-8');
    const canciones = JSON.parse(fsResponse);
    console.log('Read de canciones.json exitosa.');
    return canciones;
};

//index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../index.html')) ;
});

//get canciones
router.get('/canciones', async (req, res) => {
    const canciones = await getCanciones();
    res.json(canciones);
});

// agregar cancion
router.post("/canciones", async (req, res) => {
    let data = await fs.readFile("canciones.json", 'utf-8');
    let canciones = JSON.parse(data);
    canciones.push(req.body);
    await fs.writeFile("canciones.json", JSON.stringify(canciones));
    res.send("Canción agregada exitosamente");
});

// editar cancion
router.put("/canciones/:id", async (req, res) => {
    let data = await fs.readFile("canciones.json", 'utf-8');
    let canciones = JSON.parse(data);
    let index = canciones.findIndex((c) => c.id == req.params.id);
    canciones[index] = req.body;
    await fs.writeFile("canciones.json", JSON.stringify(canciones));
    res.send("Canción editada");
});

// eliminar cancion
router.delete("/canciones/:id", async (req, res) => {
    let data = await fs.readFile("canciones.json", 'utf-8');
    let canciones = JSON.parse(data);
    let index = canciones.findIndex((c) => c.id == req.params.id);
    canciones.splice(index, 1);
    await fs.writeFile("canciones.json", JSON.stringify(canciones));
    res.send("Canción eliminada");
});

module.exports = router;