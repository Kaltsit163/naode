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
});

router.post('/post', async (ctx, next) => {
    console.log(ctx.request.body)
    const post = ctx.request.body;
    const { created } = await Post.create(post);
    return {
        post: created
    }
});

router.get('/post/:id', async (ctx, next) => {
    const { id } = ctx.params;
    const { found }= await Post.find(id);
    return {
        post: found
    }
});

module.exports = router;
