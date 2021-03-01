'use strict';
const UserController = require('../controller/UserController');

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('/', UserController.getHome);
    app.use(router.routes()).use(router.allowedMethods());
}