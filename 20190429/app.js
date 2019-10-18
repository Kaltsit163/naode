const Koa = require('koa');
const BodyParser = require('koa-body');

const app = new Koa();

const router = require('./routes/post');

app.use(BodyParser());

app.use(router.routes());

app.listen(8088, () => { 
    console.log('amadus running')
});
