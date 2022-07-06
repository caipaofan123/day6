<template>
    <div>
       <MyHeader title="nihao" background="gold" color="hotpink"></MyHeader>
       <div style="margin:45px 0 50px">
        <MyGoods v-for="item in list" :key="item.id" :obj="item"></MyGoods>
       </div>
       
       <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyGoods from '@/components/MyGoods.vue';
import MyFooter from '@/components/MyFooter.vue';
export default {
    name: 'VuestudyShopCar',
    created(){
        this.$axios({
            url:"/api/cart",

        }).then(res=>{
            console.log(res.data.list);
            this.list=res.data.list
        })
    },
    data() {
        return {
            list: []
        };
    },
    components:{
        MyHeader,
        MyGoods,
        MyFooter,

    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>
