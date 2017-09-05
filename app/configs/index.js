'use strict';

//const  env = [process.env.NODE_ENV || 'development'];

// 用来挂载development下面配置文件

module.exports = {
    portConfig: require('./port').port,
    knexConfig: require('./knex')
}