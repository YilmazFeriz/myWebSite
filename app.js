const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const mongoStore = connectMongo(expressSession)

mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(expressSession({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(fileUpload())

app.use(express.static('public'))

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set("views", "./views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const posts = require('./routes/posts')
const users = require('./routes/users')
app.use('/',main)
app.use('/posts',posts)
app.use('/users',users)


app.listen(port, hostname, () => {
    console.log(`server calısıyor, http://${hostname}:${port}/`)
})
