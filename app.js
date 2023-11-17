const express = require('express');
const eventRouter = require('./routes/events')
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/events', eventRouter);

// Gestione della rotta principale
app.get('/', (req, res) => {
    res.send('Benvenuto nel server!');
});

// Middleware per gestire gli errori di rotta non trovata
app.use(notFoundHandler);

// Middleware per la gestione degli errori
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});
