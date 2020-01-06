//登录账号的eggjs 彩票代码
const Service = require('egg').Service;
const { nowTime } = require('../extend/helper.js')
//登录方法
class ServiceLoteryService extends Service {
    /**
    * 录入中奖号码
    * @param {*} lottery_name 
    * @param {*} lottery_number
    */
    async insertDatabase() {
        console.log('================= start');
        console.log(this.ctx.request.body);
        console.log('================= end');
        const body = this.ctx.request.body;
        const creat_time = this.app.mysql.literals.now;
        const update_time = nowTime();
        const name = body.name;
        const number = body.number;
        const uid = body.uid;
        console.log('··········');
        console.log({ creat_time, update_time, name, number });
        try {
            const lotteryInfo = await this.app.mysql.select('lottery', {
                where: { number, name }, // WHERE 条件
                limit: 1, // 返回数据量
            });
            if (lotteryInfo.length == 0) {
                const lotteryInsert = await this.app.mysql.insert('lottery', { creat_time, update_time, name, number });
                console.log('··········');
                console.log(body);
                return Promise.resolve(body)
            } else {
                return Promise.reject()
            }
        } catch (error) {
            console.log(error);
            return Promise.reject()
        }
    }
    async findDataBase() {
        console.log('================= start');
        console.log(this.ctx.request.query);
        console.log('================= end');
        const query = this.ctx.request.query;
        try {
            const name = query.name
            const page = query.page || 1
            const pageSize = query.pageSize || 10
            const limitPage = page * pageSize
            const offsetPage = (page - 1) * pageSize
            //查找数据库数据
            const lotteryList = await this.app.mysql.select('lottery', {
                where: { name }, // WHERE 条件
                limit: limitPage, // 返回数据量
                offset: offsetPage
            })
            return Promise.resolve(lotteryList)
        } catch (error) {
            console.log(error);
            return Promise.reject()
        }
    }
}

module.exports = ServiceLoteryService