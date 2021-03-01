const koa = require('koa');
const routes = require('./app/routes');
require('dotenv').config();
const app = new koa();
const koaRouter = require('koa-router');
const router = new koaRouter();
const port = process.env.PORT||4000;
app.use(router.routes())
	.use(router.allowedMethods());
app.use(async(ctx, next)=>{
	await next();
});
require('./app/routes')(app);

app.listen(port,()=>{
	console.log(`Server started at port: ${port}`);
});
