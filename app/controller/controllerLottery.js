
//用户登录的控制层
const Controller = require('egg').Controller;
const { reponse } = require('../extend/helper.js')
//注册操作调用service服务层方法
/**
* @controller 录入中奖号码
*/
class ControllerLotteryController extends Controller {
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
    * @Summary 录入数据
    * @Description  录入中奖号码
    * @Router post /api/lottery 
    * @Request body lottery 提交抽奖列表（ 注意提交post json格式 ）。
    * @Request header string token
    * @Response 200   返回返回token结果。（ 对应 contract 里面的验证属性，下面会提到 。） 
    */
    async lottery() {
        console.log('reponse');
        console.log(reponse);
        console.log(this.service);
        try {
            const userInfo = await this.service.serviceLottery.insertDatabase();
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
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @Summary 查询中奖数据
   * @Description  中奖号码
   * @Router get /api/lottery 
   * @request query string name 奖项名称
   * @request query integer page 页码 默认 1
   * @request query integer pageSize 单页数量 默认 20
   * @Request header string token
   * @Response 200   返回返回token结果。（ 对应 contract 里面的验证属性，下面会提到 。） 
   */
    async lotteryList() {
        console.log('reponse');
        console.log(reponse);
        try {
            const lotteryInfo = await this.service.serviceLottery.findDataBase();
            this.ctx.body = reponse.success({
                message: '成功',
                data: {
                    list: lotteryInfo
                }
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

module.exports = ControllerLotteryController


