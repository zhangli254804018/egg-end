//注册账号的eggjs 服务层代码
const Service = require('egg').Service;

//导出服务注册方法
export class ServiceRegisterService extends Service {
    async InsertDatabase() {
        console.log('=================');
        console.log(this.ctx)
        const username = this.ctx.query.username;
        const password = this.ctx.query.password;
        await this.app.mysql.insert('register', { username, password });
        console.log(username + '......' + password);
    }
}


