const express = require('express');
const app = express();
const port = process.env.port || 5000;
const db = require('./db');
const carsRoute = require('./routes/carsRoutes');
const cors = require("cors");

app.use(cors());
app.use(express.static("public"))


app.use(express.json());
app.use('/api/users/',require('./routes/usersRoutes'))
app.use('/api/bookings/',require('./routes/bookingsRoutes'))

app.listen(port,()=>console.log(`node js server started in ${port}`));

app.use(carsRoute);