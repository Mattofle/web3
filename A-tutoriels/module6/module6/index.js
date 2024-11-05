const mongoose = require('mongoose')

const password = process.argv[2]


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
    process.env.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)