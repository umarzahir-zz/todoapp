const mongoose = require('mongoose')
const schema = mongoose.Schema

const todoSchema = new schema({
    todo: {type: String, required: true},
    list: []
})

 module.exports = mongoose.model("todoapp", todoSchema)

