
//注册用户的控制层
const Controller = require('egg').Controller;

//注册操作调用service服务层方法
export class ControllerRegisterController extends Controller {
    async controllerRegister() {
        await this.ctx.render('register');
        // await this.service.serviceRegister.InsertDatabase();
    }
    async register() {
        await this.service.serviceRegister.InsertDatabase();
        // await this.controller.controllerLogin.jumpLogin();
        // await this.ctx.render('login');
    }
} 