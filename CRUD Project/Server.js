const express = require('express')

const bodyParser = require('body-parser');
mongoose = require('D:/tap-cohort-4/TAP_Work/Week 2/CRUD Project/model.js')

app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


port = process.env.PORT || 3000;


const { get } = require('http');
var routes = require('D:/tap-cohort-4/TAP_Work/Week 2/CRUD Project/APIs.js'); //importing APIs
routes(app); //register the route
console.log('todo list RESTful API server started on: ' + port);
app.listen(port);
