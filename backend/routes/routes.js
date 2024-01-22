const express = require('express');
const router = express.Router();
const fs = require("fs");

// probando el despliegue del servidor
router.get("/", (req, res) => {
    res.json({ message: "Hello Worldo!" });
    });

 module.exports = router;