<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/10
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    body{
        background: #f9f9f9;
    }
    .content{
        width: 1200px;
        margin: 0 auto;
    }
</style>
