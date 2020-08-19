/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
import { CHANGE_USER_INFO } from './mutations-types';

const mutations = {
    [CHANGE_USER_INFO](state, obj){
        state.userInfo = obj;
    }
};
export default mutations;
