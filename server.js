const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const db = require('./config/keys.js').mongoURI;


const app = express();
//use middleware

app.use(bodyParser.json());

//connect mongoose database
mongoose
    .connect(db)
    .then(()=>console.log('mongoose database connected ...'))
    .catch(err=>console.log(err));

//use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));
