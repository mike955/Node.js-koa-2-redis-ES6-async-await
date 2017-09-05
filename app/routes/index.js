'use strict';
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import Router from 'koa-router';
import debugg from 'debug';

/***** import own libraries *****/
import configs from '../configs/index'

const router = new Router();

router
    .get('/', (ctx, next) => {
        ctx.status = 200;
        ctx.body = { data: 'success' }
    })

export default router