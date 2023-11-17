const express = require('express');
const eventRouter = require('./routes/events')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/events', eventRouter);

app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});