//权限的控制层
const Controller = require('egg').Controller;
const { reponse } = require('../extend/helper.js');
//权限操作调用service服务层方法
/**
 * @controller 用户权限模块
 */
class controllerJurisdiction extends Controller {
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
     * @Summary 用户登录。
     * @Description  登录用户。
     * @Router post /api/login
     * @Request body loginUser 提交账号和密码（ 注意提交post json格式 ）。
     * @Request header string token
     * @Response 200   返回返回token结果。（ 对应 contract 里面的验证属性，下面会提到 。）
     */

    async login() {
        console.log('reponse');
        console.log(reponse);
        console.log(this.service);
        try {
            const userInfo = await this.service.serviceLogin.FindDatabase();
            console.log('userInfo');
            console.log(userInfo);
            this.ctx.set('token', userInfo.token);
            this.ctx.body = reponse.success({
                message: '成功',
                data: {
                    username: userInfo.username
                }
            });
        } catch (error) {
            console.log(error);
            console.log(this.ctx);
            //ctx.response.body.status
            const status = this.ctx.response.status;
            this.ctx.body = reponse.error({
                message: (error && error.message) || '失败',
                status: status
            });
        }
    }
}

module.exports = controllerJurisdiction;
