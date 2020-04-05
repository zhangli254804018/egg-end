//注册账号的eggjs 服务层代码
const Service = require('egg').Service;

//导出服务注册方法
class ServiceRegisterService extends Service {
    /**
    * 根据username password 注册用户
    * @param {*} username 
    * @param {*} password
    */
    async InsertDatabase() {
        console.log('================= start');
        console.log(this.ctx.request.body)
        console.log('================= end');
        const body = this.ctx.request.body
        const username = body.username;
        const password = body.password;
        try {
            const registerSuccess = await this.app.mysql.insert('user', { username, password });
            console.log(username + '......' + password);
            return Promise.resolve(body)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async findDatabase() {
        console.log('================= start');
        console.log(this.ctx.request.body)
        console.log(this.ctx.request.query)
        console.log('================= end');
        try {

        } catch (error) {

        }
    }
}

module.exports = ServiceRegisterService