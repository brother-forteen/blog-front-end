<template>
    <div class="base_login">
        <div class="base_login_title">
            {{form[index].title}}
        </div>
        <div v-if="index === 0" class="base_login_form">
            <div class="form_item">
                <label class="form_item_label" for="loginUser">用户名: </label>
                <input id="loginUser" v-model="form[0].userName" type="text" class="form_item_input">
            </div>
            <div class="form_item">
                <label class="form_item_label" for="loginPassword">密码: </label>
                <input id="loginPassword" v-model="form[0].password" type="text" class="form_item_input">
            </div>
            <div class="form_item">
                <base-button class="form_submit" @click="login">登录</base-button>
            </div>
            <div class="form_item form_tip">
                还没注册？<a href="javascript: void(0)" @click="goPage(1)">马上注册</a>
            </div>
        </div>

        <div v-if="index === 1" class="base_login_form register">
            <div class="form_item">
                <label class="form_item_label" for="registerUser">用户名: </label>
                <input id="registerUser" v-model="form[1].userName" type="text" class="form_item_input">
            </div>
            <div class="form_item">
                <label class="form_item_label" for="registerPassword">密码: </label>
                <input id="registerPassword" v-model="form[1].password" type="password" class="form_item_input">
            </div>
            <div class="form_item">
                <label class="form_item_label" for="reRegisterPassword">确认密码: </label>
                <input id="reRegisterPassword" v-model="form[1].rePassword" type="password" class="form_item_input">
            </div>
            <div class="form_item">
                <base-button class="form_submit" @click="register">注册</base-button>
            </div>
            <div class="form_item form_tip">
                已有账号？<a href="javascript: void(0)" @click="goPage(0)">马上登录</a>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseButton from "@/components/baseButton/BaseButton.vue";
    import { CHANGE_USER_INFO } from '@/store/mutations-types';
    import { register, login } from '@/api/api-user';

    export default {
        name: "BaseLogin",
        components: {
            'base-button': BaseButton
        },
        data(){
            return {
                index: 0,
                form: [
                    {
                        title: '登录',
                        userName: '',
                        password: ''
                    },
                    {
                        title: '注册',
                        userName: '',
                        password: '',
                        rePassword: ''
                    }
                ]
            }
        },
        methods: {
            goPage(index){
                this.index = index;
            },

            login(){
                let params = {
                    userName: this.form[0].userName,
                    password: this.form[0].password
                };

                login(params).then(res => {
                    if(res){
                        let userInfo = res.data;
                        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                        this.$store.dispatch(CHANGE_USER_INFO, userInfo);
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            register(){
                let params = {
                    userName: this.form[1].userName,
                    password: this.form[1].password
                };
                register(params).then(res => {
                    if(res){
                        console.log(res);
                        this.index = 0;
                    }
                }).catch(err => {

                })
            }
        }
    }
</script>

<style lang="scss">
    @import "./baseLogin";
</style>
