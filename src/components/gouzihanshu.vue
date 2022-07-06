<template>
    <div>
        <p id="wd">{{text}}</p>
        <button @click="btn">改变</button>
    </div>
</template>

<script>
export default {
    name: 'VuestudyGouzihanshu',

    data() {
        return {
            timer:0,
            text:'你真无敌',
        };
    },
    // beforeCreate() {
    //     console.log(77777777777);
    //     // this.fn()
    // },
    created() { 
        // console.log(888888888888);
        // this.fn()
        this.timer=setInterval(() => {
            console.log(666);
        }, 500);

    },
    // beforeMount() {
    //     let wd=document.querySelector('#wd')
    //     console.log(wd);
    // },
    // mounted() {
    //     let wd=document.querySelector('#wd')
    //     console.log(wd);
    // },
    beforeUpdate(){
        console.log(this.text);
        let wd=document.querySelector('#wd')
        console.log(wd.innerHTML);
    },
    updated() {
        console.log(this.text);
        let wd=document.querySelector('#wd')
        console.log(wd.innerHTML);
    },
    beforeDestroy() {
        console.log(this.text);
    },
    destroyed() {
        console.log(this.text);
        clearInterval(this.timer);
    },
    methods: {
        fn(){
            console.log(999999999);
        },
        btn(){
            this.text='你真牛逼'
        }
    },
};
</script>

<style scoped>

</style>