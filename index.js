const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost/portofolio', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

// middleware bodyparser
app.use(bodyParser.json());

// middleware_routing
app.use('/api/v1.0', require('./routing/version_1.0/hospital_r'));

// middleware_error_handling
app.use((err, req, res, next) => {
    // console.log(err);
    res.status('422').send({error: err.message});
});

const portNumber = 3000;
app.listen(process.env.port || portNumber, () => {
    console.info(`server online at localhost:${portNumber}`);
});