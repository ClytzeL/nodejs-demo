/*
 * description 
 * @Author: liyan52 
 * @Date: 2020-07-24 11:35:54 
 * @Last Modified by: liyan52
 * @Last Modified time: 2020-07-24 11:41:48
 */
module.exports = {
    version:'1.0',
    server:{
        port:3000
    },
    keys:[],
    session:{
        key:'app-session:sess',
        httpOnly:true
    },
    db:{
        dialect:'mysql',
        host:'0.0.0.0',// 可自己搭建mysql服务
        port:'3324',
        username:'liy',
        password:'123456',
        database:'read_app',
        pool:{
            max:5,
            min:0,
            idle:10000,
        },
        logging:false,
    }
    // 还可增加鉴权的相关信息
}