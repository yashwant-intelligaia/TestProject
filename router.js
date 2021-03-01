'use strict'
const Router = require('koa-router');
const router = new Router();
const App = require('./controller/AppController');
router.get('/',App.getData);
router.post('/',App.postData)
const Test = require('./controller/TestController');
router.get('/test',Test.getData);
module.exports = router.middleware();