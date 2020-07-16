<!--
	/**
		 * @author: wen_dell
		 * @createDate: 2019/12/11
		 * @weChat: fourteen_clever
		 * **/
-->
<template>
    <div id="home" class="home">
        <ul>
            <base-list></base-list>
        </ul>
    </div>
</template>

<script>
    import BaseList from "@/components/baseList/BaseList.vue";
    export default {
        name: "Home",
        components: {
            'base-list': BaseList
        }
    }
</script>

<style lang="scss">

</style>
