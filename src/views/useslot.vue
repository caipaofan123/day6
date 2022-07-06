<template>
    <div>
        <MyTableVue :list="list" >
            <template v-slot:name="scope">
                <input type="text" name="" id="" v-model="scope.item.name">
            </template>
            <template v-slot:age="scope">
                <input type="text" name="" id="" v-model="scope.item.age">
            </template>
            <template v-slot:img="scope">
                <img :src="scope.item.headImgUrl" alt="">
            </template>
        </MyTableVue>
    </div>
</template>

<script>
import MyTableVue from '@/components/MyTable.vue';
export default {
    name: 'VuestudyUseslot',
    components:{
        MyTableVue,
    },
    data() {
        return {
            list: [
    {
        name: "小传同学",
        age: 18,
        headImgUrl:
        "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
    },
    {
        name: "小黑同学",
        age: 25,
        headImgUrl:
        "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
    },
    {
        name: "智慧同学",
        age: 21,
        headImgUrl:
        "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
    },
],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>