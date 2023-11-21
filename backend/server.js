const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 8080;


require("./utilis/db");
const userroutes = require("./routes/userRoutes")


const app = express();
app.use(bodyparser.json());
app.use("/api", userroutes);
app.use(cors());


app.listen(port, ()=>{
    console.log(`Port  is listening at local host ${port}`);
});

