// 包含n个接口请求函数的模块

import ajax from "./ajax";

// 1
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

export const reqFoodsTypes = () => ajax('/index_category')

export const reqShops = (longitude, latitude) => ajax('/shops', { longitude, latitude })

export const reqSearchShop = (geohash, keyword) => ajax('/search_shops', { geohash, keyword })
// 6、用户名密码登陆
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax('/login_pwd', { name, pwd, captcha }, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', { phone })
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/login_sms', { phone, code }, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')
// 10、用户登出
export const reqLogout = () => ajax('/logout')


