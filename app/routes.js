'use strict';
const Router = require('koa-router');
module.exports = function (app, ctx) {
    const router = new Router();
    router.get('/', homePage);

    require('./routes/user')(app, Router);
    app.use(router.routes()).use(router.allowedMethods());
}
function homePage(ctx) {
    ctx.body = { status: "success", page: "home" }
}