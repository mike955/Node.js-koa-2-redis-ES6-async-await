'use strict';
/***** import node.js librarie *****/
import path from 'path'

/***** import third-party libraries *****/
import Koa from 'koa';
import serve from 'koa-static';
import debugg from 'debug';
import bodyParser from 'koa-bodyparser';
import bunyan from 'bunyan';
import fs from 'fs-extra';
import moment from 'moment';

/***** import own libraries *****/
import configs from './app/configs/index'
import router from './app/routes'

const app = new Koa();
const debug = debug('KNME')

if (process.env.NODE_ENV === 'production') {
    debug('Enviroment is product')
} else {
    debug('Enviroment is development')
}

/*** 每天新建日志文件，以时间命名 **/
let data = new moment(Date.now()).format('YYYY-MM-DD');
let file = 'logger/' + data.toString() + '.log';
fs.ensureFile(file, function(err) {
    if (err) throw new Error(err);
});

debug('config log');
/** 日志格式配置 **/
const log = bunyan.createLogger({
    name: 'localhost',
    streams: [{
        path: file
    }]
})

log.info('login:' + data.toString());
//注册中间件

debug('use middleware');
app
    .use(serve(__dirname + '/app/public'))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

debug('start listen');
app.listen(configs.portConfig, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log('Server start at' + configs.portConfig);
});