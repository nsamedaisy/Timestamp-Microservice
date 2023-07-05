let express = require('express')
let app = express()
app.listen(9000)

//callbacks
const serverDate = (req, res) => {
    let dateM = req.params.date
    if(isNaN(Date.parse(dateM))) {
        dateM = parseInt(dateM)
    }
    let date = new Date(dateM)

    if(date.toUTCString() == 'Invalid Date')
    return res.json({ error: 'Invalid Date'})

    res.json({
        unix: Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCSeconds()),
        utc: date.toUTCString(),
    })
}

//middlewares

//route
app.get('/api/:date', serverDate)