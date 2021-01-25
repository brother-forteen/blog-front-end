
<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/11
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div id="home" class="user">
        <button @click="submit">{{operateType === 'edit' ? '编辑' : '添加'}}</button>

        <ul class="user_list">
            <li v-for="item in data.data" :key="item._id" class="list_item">
                <div class="item_info">{{item.name}}</div> <button @click="operate('edit', item)">编辑</button> <button @click="operate('delete', item)">删除</button>
            </li>
        </ul>

        <div>
            <div>
                <label>标题:</label><input v-model="data.title" type="text" placeholder="标题">
            </div>
           
            <div>
                <label>作者:</label><input v-model="data.author" type="text" placeholder="作者">

                <label>分类:</label>
                <select v-model="data.categoryId" name="" id="">
                    <option value="1">测试</option>
                </select>
            </div>
         

            <label for="">内容</label>
            <textarea v-model="data.content" name="textarea" id="textarea" cols="30" rows="10">

            </textarea>
        </div>
    </div>
</template>

<script>
import { addArticle } from '@/api/api-article';
export default {
    name: "Article",
    data() {
        return {
            data: {
                title: 'sss',              // 标题
                author: 'aaaa',            // 作者
                categoryId: '1',    // 所属类别、
                isBoutique: false,  
                content: '111',       // 内容
                status: 1
            },
            name: '',
            detailId: '',
            operateType: 'add'
        };
    },
    mounted(){
        // this.getCategoryList();
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

        // // 列表
        // getCategoryList(){
        //     let params = {
        //         pageNo: this.data.pageNo,
        //         pageSize: this.data.pageSize
        //     }
        //     getCategoryList(params).then((res) =>{
        //         if(res){
        //             this.data = res.data;
        //         }
        //     }).catch(err => {
        //         console.log(err);
        //     })
        // },

        // // 删除
        // deleteCategory(){
        //     let params = {
        //         id: this.detailId
        //     }
        //     deleteCategory(params).then(res => {
        //         if(res){
        //             this.getCategoryList();
        //         }
        //     }).catch(err => {
        //         console.log(err);
        //     })
        // },

        // 添加
        addArticle(){
            addArticle(this.data).then((res) =>{
                if(res){
                    this.name = '';
                    // this.getCategoryList();
                }
            }).catch(err => {
             console.log(err);
            })
        },

        // // 编辑
        // editCategory(){
        //        let params = {
        //         name: this.name,
        //         id: this.detailId
        //     }
        //     editCategory(params).then((res) =>{
        //         if(res){
        //             this.name = '';
        //             this.detailId = '';
        //             this.getCategoryList();
        //         }
        //     }).catch(err => {
        //      console.log(err);
        //     })
        // },

        submit(){
            if(this.operateType === 'add'){
                this.addArticle();
            }else{
               this.editCategory(); 
            }
        }
    }
};
</script>

<style scoped lang="scss">
    
</style>
