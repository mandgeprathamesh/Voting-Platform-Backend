const express = require('express')
const app = express();
const connectDB  = require('./config/db');
connectDB();
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userroutes');
const candidateRoutes = require('./routes/candidateroutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})