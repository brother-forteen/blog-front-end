<template>
    <div class="base_user_info">
        <div class="base_user_info_title">
            用户信息
        </div>
        <div class="base_user_info_form">
            <div class="user">
                Fourteen
            </div>
            <a href="javascript: void(0)" class="logout" @click="logout">退出</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseUserInfo",
        methods: {
            logout(){

            }
        }
    }
</script>

<style lang="scss">
    @import "./baseUserInfo.scss";
</style>
