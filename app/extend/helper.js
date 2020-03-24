// app/extend/helper.js
const moment = require("moment");
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.nowTime = (type = "YYYY-MM-DD HH:mm:ss") => moment().format(type);

exports.reponse = {
  success: function(params = {}) {
    const { message, status, data } = params;
    return {
      message: message || "sucess",
      status: status || "200",
      data: data || {}
    };
  },
  error: function(params = {}) {
    const { message, status, data } = params;
    return {
      message: message || "error",
      status: status || "400"
    };
  }
};

exports.formatDate = (time, type = "YYYY-MM-DD HH:mm:ss") => moment(time).format(type);

exports.getToken = async (_this)=>{
  const token = _this.ctx.header.token; // 获取jwt
  var payload = {};
  try {
    payload = await _this.app.jwt.verify(token); // // 解密，获取payload
    console.log("token");
    console.log(token);
    console.log(payload);
  } catch (error) {}
  return payload
}
