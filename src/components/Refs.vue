<template>
    <div>
        <p ref="pref">{{msg}}</p>
        <button @click="fn1">aaa</button>
        <p>3. vue更新DOM是异步的</p>
      <p ref="myP">{{ count }}</p>
      <button @click="btn">点击count+1, 马上提取p标签内容</button>
    </div>
</template>

<script>
export default {
    name: 'VuestudyRefs',

    data() {
        return {
            msg:'尼尼爱',
            count:0,
        };
    },
    beforeMount() {
        console.log(this.$refs.pref);
        this.$nextTick(()=>{
            console.log(this.$refs.pref);
        })
    },
    mounted() {
        
    },

    methods: {
        fn(){
            console.log('reffffffffffffffffffffffffff');
        },
        fn1(){
            console.log(this.$refs.pref);
        },
        btn(){
            this.count++
            console.log(this.count);
            this.$nextTick(()=>{

                console.log(this.$refs.myP.innerHTML);
            })
        }

    },
};
</script>

<style scoped>

</style>