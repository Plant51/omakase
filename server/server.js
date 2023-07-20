const express = require('express')
const cors = require('cors');
const db = require('./db')
const app = express()
const port = process.env.PORT || 8080

// Enable CORS for all routes
app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})