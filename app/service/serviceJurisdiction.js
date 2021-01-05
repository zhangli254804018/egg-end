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
        console.log(this.ctx.request.body);
        console.log('================= end');
        const body = this.ctx.request.body;
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
            const loginSucess = await this.app.mysql.select('user', {
                where: { username: username, password: password }, // WHERE 条件
                limit: 1 // 返回数据量
            });

            if (loginSucess.length > 0) {
                console.log(username + '......' + password);
                console.log(loginSucess);
                console.log(loginSucess[0]);
                const result = loginSucess[0] || {};
                try {
                    console.log(this.app.jwt);
                    //生成 token 的方式
                    var token = this.app.jwt.sign({
                        //需要存储的 token 数据
                        uid: result.uid,
                        username: username
                    });
                    console.log('token');
                    console.log(token);
                } catch (error) {
                    console.log('token');
                    console.log(error);
                }
                var propertysStr = JSON.stringify(result);
                var propertys = JSON.parse(propertysStr);
                propertys.token = token;
                console.log('propertys');
                console.log(propertys);
                return Promise.resolve(propertys);
            } else {
                return Promise.reject(error);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = ServiceLoginService;
