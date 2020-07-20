<template>
    <div class="base_button" @click="clickButton">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BaseButton",
        props: {
            'click': {
                type: Function
            }
        },
        methods: {
            clickButton(){
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./baseButton.scss";
</style>
