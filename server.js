const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


const dbUrl = "mongodb+srv://umar:khan@firstcluster-yfopq.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {useUnifiedTopology: true, useNewUrlParser: true})
.then((res)=>console.log("mongodb connected"))
.catch((err)=>console.log("error!!! in connecting to mongodb"))


app.listen(port ,() => console.log(`server is listning on port ${port}`))