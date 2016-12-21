import * as express from "express"
var indexRouter = express.Router()

indexRouter.get('/', function(req, res, next) {
    res.render('./server/views/index.pug');
});

export { indexRouter }