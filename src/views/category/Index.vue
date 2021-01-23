
<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/11
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div id="home" class="user">
        <button @click="operate('add')">添加</button>
        <ul class="user_list">
            <li v-for="item in data.data" :key="item._id" class="list_item">
                <div class="item_info">{{item.name}}</div> <button @click="operate('edit', item)">编辑</button> <button @click="operate('delete', item)">删除</button>
            </li>
        </ul>

        <input v-model="name" type="text"><button @click="submit">{{operateType === 'edit' ? '编辑' : '添加'}}</button>
    </div>
</template>

<script>
import { getCategoryList, addCategory, editCategory, deleteCategory } from '@/api/api-category';
export default {
    name: "Category",
    data() {
        return {
            data: {
                data: [],
                pageNo: 1,
                pageSize: 10,
                totalCount: 0,
                totalPage: 1
            },
            name: '',
            detailId: '',
            operateType: ''
        };
    },
    mounted(){
        this.getCategoryList();
    },
    methods: {
        operate(type, item){
            this.operateType = type;

            if(type === 'add'){
                
            }

            if(type === 'edit'){
                this.name = item.name;
                this.detailId = item._id;
            }

            if(type === 'delete'){
                this.detailId = item._id;
                this.deleteCategory();
            }
        },

        // 列表
        getCategoryList(){
            let params = {
                pageNo: this.data.pageNo,
                pageSize: this.data.pageSize
            }
            getCategoryList(params).then((res) =>{
                if(res){
                    this.data = res.data;
                }
            }).catch(err => {
                console.log(err);
            })
        },

        // 删除
        deleteCategory(){
            let params = {
                id: this.detailId
            }
            deleteCategory(params).then(res => {
                if(res){
                    this.getCategoryList();
                }
            }).catch(err => {
                console.log(err);
            })
        },

        // 添加
        addCategory(){
            let params = {
                name: this.name
            }
            addCategory(params).then((res) =>{
                if(res){
                    this.name = '';
                    this.getCategoryList();
                }
            }).catch(err => {
             console.log(err);
            })
        },

        // 编辑
        editCategory(){
               let params = {
                name: this.name,
                id: this.detailId
            }
            editCategory(params).then((res) =>{
                if(res){
                    this.name = '';
                    this.detailId = '';
                    this.getCategoryList();
                }
            }).catch(err => {
             console.log(err);
            })
        },

        submit(){
            if(this.operateType === 'add'){
                this.addCategory();
            }else{
               this.editCategory(); 
            }
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
