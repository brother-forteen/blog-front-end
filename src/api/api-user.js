/**
 * @createDate: 2020-07-21
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

import { AXIOS_INSTANCE } from './index';
import { USER } from './constant';

export const register = (opt) => {
    return AXIOS_INSTANCE.post(`${USER}/register`, opt);
};
