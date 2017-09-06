'use strict';
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import Router from 'koa-router';
import debugg from 'debug';

/***** import own libraries *****/
import configs from '../configs/index'

const router = new Router();
const debug = debug('KNME');

debug('router start');

router
    .get('/', (ctx, next) => {
        ctx.status = 200;
        ctx.body = { data: 'success' }
    })

export default router