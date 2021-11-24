const express = require('express')
const returnsRoutes = require('./routes/returnsRoutes')

const app = express()
const port = 5000
app.use(express.json())
app.use('/api', returnsRoutes)
app.use('/', express.static('../client/build'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})