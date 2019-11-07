
//注册用户的控制层
const Controller = require('egg').Controller;
const { reponse } = require('../extend/helper.js')
//注册操作调用service服务层方法
class ControllerRegisterController extends Controller {
    async controllerRegister() {
        await this.ctx.render('register');
    }
    async register() {
        console.log('reponse');
        console.log(reponse);
        try {
            const InsertDatabase = await this.service.serviceRegister.InsertDatabase();
            this.ctx.body = reponse.success({
                message: '注册成功',
                data: {
                    username: InsertDatabase.username,
                    password: '******'
                }
            })
        } catch (error) {
            console.log(error);
            console.log(this.ctx);
            const status = this.ctx.response.status
            this.ctx.body = reponse.error({
                message: '抱歉！注册失败，请重新注册',
                status: status
            })
        }
        // await this.controller.controllerLogin.jumpLogin();
        // await this.ctx.render('login');
    }
}

module.exports = ControllerRegisterController


