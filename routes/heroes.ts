import * as express from "express"
var heroesRouter = express.Router();

heroesRouter.get('/heroes', function(req, res, next) {
    res.send('HEROES LIST');
});

export { heroesRouter }