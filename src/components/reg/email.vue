<template>
    <div>
        <br>
            
            <br/>
            
            <span>邮箱地址</span>
            <br>
            <input type="text" name="" id="" placeholder="输入邮箱地址">
            <br>
            <br>
            <input type="text" name="" id="a" placeholder="输入邮箱验证码"> <button>发送验证码</button>
            <br/>
            <slot name="pwd"></slot>
            <slot name="yaoqing"></slot>
    </div>
</template>

<script>
export default {
    name: 'VuestudyEmail',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    #a {
        width: 102px;
    }
</style>