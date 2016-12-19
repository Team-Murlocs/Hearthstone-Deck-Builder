import * as express from "express"
var heroesRouter = express.Router();

heroesRouter.get('/', function(req, res, next) {
    res.send('HEROES LIST');
});

export { heroesRouter }