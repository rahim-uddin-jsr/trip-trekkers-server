const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Trip Trekkers Server Running')
})

// places data 
const places = require('./data/places.json')
app.get('/places', (req, res) => {
    res.send(places)
})



app.listen(port, () => {
    console.log('Trip Trekkers Server Running on port=', port);
})