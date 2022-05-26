const req = require('express/lib/request');
const { create_a_task } = require('./Controller');




module.exports = function(app) {
    var quotes = require('D:/tap-cohort-4/TAP_Work/Week 2/CRUD Project/Controller.js');
    
    app.get('/',quotes.find_quote)
    app.put('/quotes',quotes.update_quote)
    app.route('/quotes').post(quotes.create_a_task)
    app.delete('/quotes',quotes.delete_quote)
    
};




