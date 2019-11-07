//注册账号的eggjs 服务层代码
const Service = require('egg').Service;

//导出服务注册方法
class ServiceRegisterService extends Service {
    async InsertDatabase() {
        console.log('================= start');
        console.log(this.ctx.request.body)
        console.log('================= end');
        const body = this.ctx.request.body
        const username = body.username;
        const password = body.password;
        try {
            const registerSuccess = await this.app.mysql.insert('register', { username, password });
            console.log(username + '......' + password);
            return Promise.resolve(body)
        } catch (error) {
            return Promise.reject()
        }
    }
}

module.exports = ServiceRegisterService