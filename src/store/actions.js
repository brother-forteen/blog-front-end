/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
import { CHANGE_USER_INFO } from './mutations-types';

const actions = {
    [CHANGE_USER_INFO]({ commit }, obj){
        commit(CHANGE_USER_INFO, obj);
    },
};

export default actions;
