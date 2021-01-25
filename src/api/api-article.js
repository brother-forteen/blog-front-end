import { AXIOS_INSTANCE } from './index';
import { ARTICLE } from './constant';

// export const getCategoryList = (opt) => {
//     return AXIOS_INSTANCE.get(`${CATEGORY}/list`, {params: opt});
// }

export const addArticle = (opt) => {
    return AXIOS_INSTANCE.post(`${ARTICLE}/add`, opt);
}

// export const editCategory = (opt) => {
//     return AXIOS_INSTANCE.put(`${CATEGORY}/edit`, opt);
// }

// export const deleteCategory = (opt) => {
//     return AXIOS_INSTANCE.delete(`${CATEGORY}/delete`, {params: opt});
// }