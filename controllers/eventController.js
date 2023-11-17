const Event = require('../models/event');

exports.index = function(req, res) {
    const events = Event.getAllEvents(); 
    res.send(events);
};

exports.store = function(req, res) {
    const { title, description, date, maxSeats } = req.body;

    // Inizializza la variabile events ottenendo gli eventi esistenti
    const events = Event.getAllEvents();

    const newEvent = new Event(events.length + 1, title, description, date, maxSeats);

    events.push(newEvent);
    Event.saveAllEvents(events); 

    res.status(201).json(newEvent);
};

exports.update = function(req, res) {
    const { id } = req.params;
    const { title, description, date, maxSeats } = req.body;

    // Inizializza la variabile events ottenendo gli eventi esistenti
    const events = Event.getAllEvents();
    
    const existingEvent = events.find(event => event.id === parseInt(id));
    if (!existingEvent) {
        res.status(404).send('Evento non trovato');
    } else {
        existingEvent.title = title;
        existingEvent.description = description;
        existingEvent.date = date;
        existingEvent.maxSeats = maxSeats;
        Event.saveAllEvents(events); 
        res.status(200).json(existingEvent);
    }
};
