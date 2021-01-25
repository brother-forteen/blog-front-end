/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

import login from './router-login';
import home from './router-home';
import user from './router-user';
import category from './router-category';
import article from './router-article';

export default [
    ...login,
    ...home,
    ...user,
    ...category,
    ...article
];
