//登录账号的eggjs 服务层代码
const Service = require('egg').Service;

//登录方法
class ServiceLoginService extends Service {
    /**
    * 根据username password 登录用户
    * @param {*} username 
    * @param {*} password
    */
    async FindDatabase() {
        console.log('================= start');
        console.log(this.ctx.request.body)
        console.log('================= end');
        const body = this.ctx.request.body
        const username = body.username;
        const password = body.password;
        try {
            // const results = await this.app.mysql.select('posts', { // 搜索 post 表
            //     where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
            //     columns: ['author', 'title'], // 要查询的表字段
            //     orders: [['created_at','desc'], ['id','desc']], // 排序方式
            //     limit: 10, // 返回数据量
            //     offset: 0, // 数据偏移量
            //   });
            const loginSucess = await this.app.mysql.select('register', {
                where: { username: username, password: password }, // WHERE 条件
                limit: 1, // 返回数据量
            });
            if (loginSucess.length > 0) {
                console.log(username + '......' + password);
                console.log(loginSucess);
                return Promise.resolve(loginSucess[0])
            } else {
                return Promise.reject()
            }
        } catch (error) {
            return Promise.reject()
        }
    }
}

module.exports = ServiceLoginService