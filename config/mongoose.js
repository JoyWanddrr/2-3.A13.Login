const mongoose = require('mongoose')
mongoose.connect(PROCESS.ENV.MOGODB_URI)
const db = mongoose.connection

db.on(error, () => {
  console.log('mongoose connection failed.')
})

db.once(open, () => {
  console.log('mongoose connected!')
})

module.exports = db