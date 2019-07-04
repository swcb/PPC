// express
const express = require('express');
var app = express();

// connection
module.exports = app.listen(6562, () => {
      console.log('listening on port 6562!');
    });
/*
// mongo ODM
const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.URL_BD + '/AuthAPI-bd',{
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  autoReconnect: true,
  reconnectInterval: 1000
});
mongoose.Promise = global.Promise;
*/
// CORS
const cors = require('cors');
app.use(cors());

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '15mb'}));
app.use(bodyParser.urlencoded({limit: '15mb', extended: true, parameterLimit:15000}));

// routers
const router0 = express.Router();
const router1 = express.Router();

app.use(router0.get('/', (req, res) => {res.send('Auth API - ON')}))
const authRouters = require('./routes/auth.routes');
app.use('/', authRouters(router1));
