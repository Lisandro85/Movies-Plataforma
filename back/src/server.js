const express = require("express");
const router = require("./routes/index");
const morgan = require('morgan');
const cors = require("cors");

const app=express();

////////////middlewere´s/////////////////////////////
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(router);

module.exports=app;


