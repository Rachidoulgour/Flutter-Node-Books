const express = require('express');



const app = express();


app.set('port', process.env.PORT || 4000);

app.use(express.json());





module.exports = app;