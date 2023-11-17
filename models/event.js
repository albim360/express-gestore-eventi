const fs = require('fs');
const path = require('path');

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    static getAllEvents() {
        try {
            const eventsData = fs.readFileSync(path.resolve(__dirname, 'events.json'), 'utf-8');
            return JSON.parse(eventsData);
        } catch (error) {
            // Se il file non esiste o ci sono altri problemi, ritorna un array vuoto
            return [];
        }
    }

    static saveAllEvents(events) {
        fs.writeFileSync(path.resolve(__dirname, 'events.json'), JSON.stringify(events, null, 2), 'utf-8');
    }

    static getEventById(eventId) {
        const events = Event.getAllEvents();
        return events.find(event => event.id === eventId);
    }

    static getFilteredEvents(filters) {
        const events = Event.getAllEvents();
    
        if (filters) {
            return events.filter(event => {
                if (filters.title && !event.title.toLowerCase().includes(filters.title.toLowerCase())) {
                    return false;
                }
                if (filters.description && !event.description.toLowerCase().includes(filters.description.toLowerCase())) {
                    return false;
                }
                if (filters.date && !event.date.toLowerCase().includes(filters.date.toLowerCase())) {
                    return false;
                }
                if (filters.maxSeats && event.maxSeats !== parseInt(filters.maxSeats)) {
                    return false;
                }
                return true;
            });
        }
    
        return events;
    }
    
}

module.exports = Event;
