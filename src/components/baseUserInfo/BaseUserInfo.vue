<template>
    <div class="base_user_info">
        <div class="base_user_info_title">
            用户信息
        </div>
        <div class="base_user_info_form">
            <div class="user">
                {{userInfo.userName}}

                <a v-if="userInfo.role === 'visitor'" href="/">进入管理</a>
            </div>
            <a href="javascript: void(0)" class="logout" @click="logout">退出</a>
        </div>
    </div>
</template>

<script>
    import { CHANGE_USER_INFO } from '@/store/mutations-types';
    import { logout } from '@/api/api-user';

    export default {
        name: "BaseUserInfo",
        data(){
            return {
                userInfo: this.$store.state.userInfo
            }
        },
        methods: {
            logout(){
                logout().then((res) => {
                    if(res.code === 0){
                        sessionStorage.removeItem('userInfo');
                        this.$store.dispatch(CHANGE_USER_INFO, null);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style lang="scss">
    @import "./baseUserInfo.scss";
</style>
