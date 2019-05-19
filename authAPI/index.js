// express
const express = require('express');
var app = express();

// connection
if(!module.parent){
    app.listen(6565, function() {
      console.log('listening on port 6565!');
    });
}

/*

// mongo ODM
const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.URL_BD + '/bd-seguro');
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
const router2 = express.Router();


/**/
app.use(router0.get('/', (req, res) => {res.send('Projeto: Pilha Completa, está rodando legal!')}))
/*
const authRouter = require('./modules/authentication/auth.server.routes');
app.use('/auth', authRouter(router1));
*/
/*
const userRouter = require('./modules/user/user.server.routes');
app.use('/user', userRouter(router2));
*/