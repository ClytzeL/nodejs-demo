/*
 * 配置文件 
 * @Author: liyan52 
 * @Date: 2020-07-24 11:32:51 
 * @Last Modified by: liyan52
 * @Last Modified time: 2020-07-24 11:35:45
 */
const devConfig = require('./config.dev')
const prodConfig = require('./config.prod')
let config = devConfig
let env = process.env.NODE_ENV
if(env == 'production'){
    config = prodConfig
}
exports.modules = config