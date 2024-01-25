const fs = require("fs").promises


// obtener canciones
const obtenerCanciones = async (req, res) => {
    const fsResponse = await fs.readFile("./backend/src/data/repertorio.json", 'utf-8');
    const canciones = JSON.parse(fsResponse);
    console.log('Read de repertorio.json exitosa.');
    res.json(canciones);
    return canciones
};
 
// agregar cancion
const agregarCancion = async (req, res) => {
    let data = await fs.readFile("./backend/src/data/repertorio.json", 'utf-8');
    let canciones = JSON.parse(data);
    canciones.push(req.body);
    await fs.writeFile("./backend/src/data/repertorio.json", JSON.stringify(canciones));
    res.send(`Canción agregada exitosamente`);
}

// editar cancion
const editarCancion = async (req, res) => {
    let data = await fs.readFile("./backend/src/data/repertorio.json", 'utf-8');
    let canciones = JSON.parse(data);
    let index = canciones.findIndex((c) => c.id == req.params.id);
    canciones[index] = req.body;
    await fs.writeFile("./backend/src/data/repertorio.json", JSON.stringify(canciones));
    res.send(`Canción ${req.params.id} editada`);
}

// eliminar cancion
const eliminarCancion = async (req, res) => {
    let data = await fs.readFile("./backend/src/data/repertorio.json", 'utf-8');
    let canciones = JSON.parse(data);
    let index = canciones.findIndex((c) => c.id == req.params.id);
    canciones.splice(index, 1);
    await fs.writeFile("./backend/src/data/repertorio.json", JSON.stringify(canciones));
    res.send(`Canción ${req.params.id} eliminada`);
}



module.exports = {
    agregarCancion,
    editarCancion,
    eliminarCancion,
    obtenerCanciones
}