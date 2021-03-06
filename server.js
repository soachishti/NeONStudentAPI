var express 	= require('express');
var bodyParser 	= require('body-parser');
var cors 		= require('cors')
var compression = require('compression')

var app = express();
app.use(compression());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true // to support URL-encoded bodies
}));
app.use('/docs', express.static('apidoc'));
app.use('/tos', express.static('tos.html'));

var corsOptions = {
    origin: true,
    methods: ['POST', 'GET', 'OPTIONS'],
    credentials: true,
    maxAge: 3600
};

app.use(cors(corsOptions)); // For allowing Ajax to access out API

module.exports = app;