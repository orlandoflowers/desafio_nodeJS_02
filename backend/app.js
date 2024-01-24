const express = require("express");
const path = require("path"); 
const app = express();
const routes = require("./src/routes/routes");
const cors= require( "cors") ;

const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));
app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
  });

app.use("/", routes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));