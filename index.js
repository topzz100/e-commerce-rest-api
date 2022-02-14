const express = require('express')
const app = express()


const port = process.env.PORT || 7700
app.listen(port, console.log(`app listening on port ${port}`))