//Require dependencies

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8008
require('dotenv').config()

//Declare DB Variables
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'star-trek-api'
//Connect to Mongo
MongoClient.connect(dbConnectionStr)
    .catch(client => {
        console.log(`Connectedto ${dbName} Database`)
        db = client.db(dbName)
        })

//Set Middlewares
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/index.ejs')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})