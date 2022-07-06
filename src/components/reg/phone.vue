<template>
    <div>
            <br>
            <slot name="area" :whe="whe"></slot>
            <br/>
            
            <span>手机号码</span>
            <br>
            <input type="text" name="" id="" placeholder="输入手机号码">
            <br>
            <br>
            <input type="text" name="" id="a" placeholder="输入验证码"> <button>发送验证码</button>
            <br/>
            <slot name="pwd"></slot>
            <slot name="yaoqing"></slot>
        

    </div>
</template>

<script>
export default {
    name: 'VuestudyPhone',

    data() {
        return {
            whe:[{area:'中国大陆',id:1},{area:'中国香港',id:2},{area:'海外',id:3}],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
    #a {
        width: 102px;
    }
</style>