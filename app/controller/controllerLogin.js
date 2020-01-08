
//用户登录的控制层
const Controller = require('egg').Controller;
const { reponse } = require('../extend/helper.js')
//注册操作调用service服务层方法
/**
* @controller 用户登录模块
*/
class ControllerLoginController extends Controller {
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
    * @Summary 用户登录。
    * @Description  登录用户。
    * @Router post /api/login 
    * @Request body loginUser 提交账号和密码（ 注意提交post json格式 ）。
    * @Request header string access_token
    * @Response 200   返回返回token结果。（ 对应 contract 里面的验证属性，下面会提到 。） 
    */
    async controllerLogin() {
        await this.ctx.render('login');
    }
    async login() {
        console.log('reponse');
        console.log(reponse);
        console.log(this.service);
        try {
            const userInfo = await this.service.serviceLogin.FindDatabase();
            this.ctx.body = reponse.success({
                message: '成功',
                data: userInfo
            })
        } catch (error) {
            console.log(error);
            console.log(this.ctx);
            const status = this.ctx.response.status
            this.ctx.body = reponse.error({
                message: '失败',
                status: status
            })
        }
    }
}

module.exports = ControllerLoginController


