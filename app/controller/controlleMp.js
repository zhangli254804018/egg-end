//用户登录的控制层
const Controller = require('egg').Controller;
const { reponse } = require('../extend/helper.js');
//注册操作调用service服务层方法
/**
 * @controller 微信模块
 */
class ControllerMpController extends Controller {
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
     * @Summary 注册用户。
     * @Description { username:xx,password:xx } 注册用户。
     * @Router post /api/register （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
     * @Request body createUser 提交用户名。（ 注意提交post json格式 ）。
     * @Request header string token
     * @Response 200   返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
     */
    async register() {
        console.log('reponse');
        console.log(reponse);
        console.log(this.service);
        try {
            const InsertDatabase = await this.service.serviceUser.InsertDatabase();
            this.ctx.body = reponse.success({
                message: '成功',
                data: {
                    username: InsertDatabase.username,
                    password: '******'
                }
            });
        } catch (error) {
            console.log(error);
            console.log(this.ctx);
            const status = this.ctx.response.status;
            this.ctx.body = reponse.error({
                message:
                    (error && error.message),
                status: status
            });
        }
        // await this.controller.controllerLogin.jumpLogin();
        // await this.ctx.render('login');
    }
}

module.exports = ControllerMpController;
