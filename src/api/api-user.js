/**
 * @createDate: 2020-07-21
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

import { AXIOS_INSTANCE } from './index';
import { USER } from './constant';

// 注册
export const register = (opt) => {
    return AXIOS_INSTANCE.post(`${USER}/register`, opt);
};

// 登录
export const login = (opt) => {
    return AXIOS_INSTANCE.post(`${USER}/login`, opt);
};

// 退出
export const logout = (opt) => {
    return AXIOS_INSTANCE.get(`${USER}/logout`, {params: opt});
};

// 获取用户列表
export const getUserList = (opt) => {
    return AXIOS_INSTANCE.get(`${USER}/list`, {params: opt});
}