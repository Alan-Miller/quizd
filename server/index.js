require('dotenv').config()
const express = require('express'),
  app = express()

app.use(express.static(`${__dirname}/../build`))

app.get('/api/message', () => {
  res.status(200).send('Nice quiz, bro')
})

app.listen(
  process.env.SERVER_PORT,
  () => { console.log(`Listening on port ${process.env.SERVER_PORT}.`) }
)