import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send(`<h1> Node and express server running on port ${PORT}</h1>`);
});

app.listen(PORT, () => console.log(`Your server is running on ${PORT}`))