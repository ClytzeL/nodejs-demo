/*
 * description 
 * @Author: liyan52 
 * @Date: 2020-07-24 11:52:39 
 * @Last Modified by: liyan52
 * @Last Modified time: 2020-07-24 11:56:18
 */
const router = require('koa-router')()
const bookService = require('../services/book')
router.get('/getBooks',async (ctx,next) => {
    try{
        ctx.body = await bookService.get(ctx)
    }catch(error){
        ctx.body = {
            code:40000,
            message:error.message
        }
    }
})
exports.module = router