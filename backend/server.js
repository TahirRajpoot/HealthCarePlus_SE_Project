const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const port = 8080;

require("./utilis/db");
const app = express();
const userroutes = require("./routes/userRoutes")
app.use(cors());
app.use(bodyparser.json());


app.use("/api", userroutes);





app.listen(port, ()=>{
    console.log(`Port  is listening at local host ${port}`);
});

