const fs = require('fs');
const path = require('path');

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = maxSeats;
    }
}