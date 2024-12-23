require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const transRoutes = require('./routes/transaction.js');
const userRoutes = require('./routes/user.js');
const PORT = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());
app.use(cors("pass"));

//mongodb connection
db();

//routes
app.use('/transaction',transRoutes)
app.use('/users',userRoutes)

app.listen(PORT,()=>{
    console.log("Server is started at port:",PORT);
})