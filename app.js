require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const path= require("path");
const cookieParser = require("cookie-parser");
const DefaultData = require("./defaultdata");
// require("./db/connection");
const router = require("./routes/router");
const  cors= require("cors");
const  productsData= require('./models/productsSchema');


// middleware

app.use(cors());
app.use(express.json());
app.use(cookieParser(""));
app.use(express.static(path.join(__dirname,'public')));

app.use(router);
// app.get("/",(req,res)=>{
//     res.send("your server is running");
// });





mongoose
  .connect(
    "mongodb+srv://admin:7h5l7dmpvgS8zI1l@cluster0.xvxp0s8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));



app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();