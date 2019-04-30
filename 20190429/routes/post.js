const Router = require('koa-router');
const Post = require('../models/post');

const router = new Router();

router.get('/posts', async (ctx, next) => { 
    const { posts } = await Post.list({
        limit: 10
    })
    ctx.body = {
        posts
    }
    next()
});

router.post('/post', async (ctx, next) => {
    const { post } = ctx.request.body;
    const { created } = await Post.create(post);
    ctx.body = {
        created
    }
    next()
});

router.get('/post/:id', async (ctx, next) => {
    const { id } = ctx.params;
    const { found } = await Post.find(id);
    ctx.body = {
        found
    }
    next()
});

module.exports = router;
