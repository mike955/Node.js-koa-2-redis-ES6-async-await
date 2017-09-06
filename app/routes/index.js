'use strict';
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import Router from 'koa-router';
import debugg from 'debug';

/***** import own libraries *****/
import Index from '../controllers/index'

const router = new Router();
const debug = debugg('KNME');

debug('router start');

router
    .get('/', Index.index)

export default router