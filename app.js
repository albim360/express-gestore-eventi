const express = require('express');
const eventRouter = require('./routes/events')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/events', eventRouter);

// Gestione della rotta principale
app.get('/', (req, res) => {
    res.send('Benvenuto nel server!');
});

app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});
