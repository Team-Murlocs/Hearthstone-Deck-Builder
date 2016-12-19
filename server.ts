import * as express from "express"
import * as bodyParser from "body-parser"
import * as path from "path"
import * as mongojs from "mongojs"
import { indexRouter } from "./routes/index"
import { heroesRouter } from "./routes/heroes"

var db = mongojs("mongodb://pesho:pesho@ds139428.mlab.com:39428/hearthstone-deck-builder")

var port = 3000;

var app = express();

app.set('views', path.join(__dirname), 'views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/', heroesRouter);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});