/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

const state = {
    userInfo: sessionStorage.getItem('userInfo') && sessionStorage.getItem('userInfo') !== 0 ? JSON.parse(sessionStorage.getItem('userInfo')) : null
};

export default state;
