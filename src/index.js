const Koa = require('koa');
const bodyParser = require('koa-body');
const router = require('./route/user');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.listen(8088);

console.log('8088 is on');
