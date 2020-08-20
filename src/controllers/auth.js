/*
 * description 
 * @Author: liyan52 
 * @Date: 2020-07-23 20:10:26 
 * @Last Modified by: liyan52
 * @Last Modified time: 2020-07-24 11:29:34
 */
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()

router.get('/hello/:home',async (ctx,next) => {
    let name = ctx.params.name
    ctx.require.body = `<h1>Hello,${name}!</h1>`
})
router.get('/',async (ctx,next) =>{
    ctx.response.body = '<h1>Index</h1>'
})

module.exports = router