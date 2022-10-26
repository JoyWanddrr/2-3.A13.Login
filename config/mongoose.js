const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose connection failed.')
})

db.once('open', () => {
  console.log('mongoose connected!')
})

module.exports = db