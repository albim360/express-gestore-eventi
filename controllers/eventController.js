const Event = require('../models/event');

exports.index = function(req, res) {
    const events = Event.getEvents();
    res.send(events);
};

exports.store = function(req, res) {
    const { title, description, date, maxSeats} = req.body;
    const newEvent = new Event(events.lenght + 1, title, description, date, maxSeats);

    events.push(newEvent);
};

exports.update = function(req, res) {

};