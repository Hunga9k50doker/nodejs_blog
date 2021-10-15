const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const settingRouter = require('./setting');
const siteRouter = require('./site');

function route(app){

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/setting', settingRouter);
    app.use('/', siteRouter);
 
}

module.exports = route;

