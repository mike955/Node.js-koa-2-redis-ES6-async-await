import Knex from 'knex';
import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

class Index {
    static index(ctx, next) {
        try {
            ctx.status = 200;
            ctx.body = { data: 'success' }
        } catch (err) {
            throw new Error(err);
        }
    }

    static async doSome(ctx, next) {
        try {
            let res = await knex('test_table').insert('test_data')
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default Index;