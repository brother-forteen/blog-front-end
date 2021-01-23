<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/11
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div id="home" class="user">
        <ul class="user_list">
            <li v-for="item in data.data" :key="item._id" class="list_item">
                <div class="item_info">用户名: {{item.userName}}</div>
                <div class="item_info">密码: {{item.password}}</div>
                <div class="item_info">角色: {{item.role}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getUserList } from '@/api/api-user';
export default {
    name: "User",
    data() {
        return {
            data: {
                data: [],
                pageNo: 1,
                pageSize: 10,
                totalCount: 5,
                totalPage: 1
            }
        };
    },
    mounted(){
        this.getUserList();
    },
    methods: {
        getUserList(){
            let params = {
                pageNo: this.data.pageNo,
                pageSize: this.data.pageSize
            }
            getUserList(params).then((res) =>{
                if(res){
                    console.log(res);
                    this.data = res.data;
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
};
</script>

<style scoped lang="scss">
    .user_list{
        .list_item{
            &::after{
                display: block;
                content: '';
                clear: both;
            }

            .item_info{
                float: left;
                width: 33%;
            }
        }
    }
</style>
