<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/11
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div id="home" class="home">

        <div class="user_info">
            <base-login v-if="!userInfo"></base-login>
            <base-user-info v-if="userInfo" style="margin-bottom: 20px"></base-user-info>

            <base-community style="margin-bottom: 20px"></base-community>
        </div>

        <ul class="home_list">
            <base-list></base-list>
        </ul>

    </div>
</template>

<script>
    import BaseList from "@components/baseList/BaseList.vue";
    import BaseLogin from "@components/baseLogin/BaseLogin.vue";
    import BaseUserInfo from "@components/baseUserInfo/BaseUserInfo.vue";
    import BaseCommunity from "@components/baseCommunity/BaseCommunity.vue";
    export default {
        name: "Home",
        components: {
            'base-list': BaseList,
            'base-login': BaseLogin,
            'base-user-info': BaseUserInfo,
            'base-community': BaseCommunity,
        },
        data(){
            return {
                userInfo: null
            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/views/home/home";
</style>
