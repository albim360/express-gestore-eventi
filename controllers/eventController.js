const Event = require('../models/event');

exports.index = function(req, res) {
    const events = Event.getEvents();
    res.send(events);
};

exports.store = function(req, res) {
    const { title, description, date, maxSeats} = req.body;

    const newEvent = new Event(events.lenght + 1, title, description, date, maxSeats);

    events.push(newEvent);
    Event.saveEvents(events);

    res.status(201).json(newEvent);
};

exports.update = function(req, res) {
    const { id } = req.params;
    const { title, description, date, maxSeats} = req.body;

    const events = Event.getEvents();
    const existingEvent = events.find(event => event.id === id);
    if (!existingEvent) {
        res.status(404).send('Evento non trovato');
    } else {
        existingEvent.title = title;
        existingEvent.description = description;
        existingEvent.date = date;
        existingEvent.maxSeats = maxSeats;
        Event.saveEvents(events);
        res.status(200).json(existingEvent);
    }
    res.json(events);
};