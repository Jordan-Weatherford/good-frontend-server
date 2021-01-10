const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

// serve up production assets
app.use(express.static('build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/build/'});
});

app.listen(3002)