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
    static getEvents() {
        const events = fs.readFileSync(path.join(__dirname, 'events.json'), 'utf-8');
        return JSON.parse(events);
    }
    static saveEvents(events) {
        fs.writeFileSync(path.join(__dirname, 'events.json'), JSON.stringify(events));
    }
}

module.exports = Event;