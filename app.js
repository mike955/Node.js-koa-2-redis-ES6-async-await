'use strict';
/***** import node.js librarie *****/
import path from 'path'

/***** import third-party libraries *****/
import Koa from 'koa';
import serve from 'koa-static';
import debugg from 'debug';
import bodyParser from 'koa-bodyparser';

/***** import own libraries *****/
import configs from './app/configs/index'
import router from './app/routes'

const app = new Koa();


//注册中间件

app
    .use(serve(__dirname + '/app/public'))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(configs.portConfig, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log('Server start at' + configs.portConfig);
});