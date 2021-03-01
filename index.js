const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
app.use(cors());
const router = require('./router');
app.use(router);
app.listen(4000);
console.log('server started at port:4000')
