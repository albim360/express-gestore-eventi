const Event = require('../models/event');

exports.index = function(req, res) {
    const events = Event.getEvents();
    res.send(events);
}

exports.store = function(req, res) {
    
}

exports.update = function(req, res) {

}