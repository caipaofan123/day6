<template>
    <tr>
        <td><input type="checkbox" name="" id="" v-model="obj.checked"></td>
        <td>{{obj.name}}</td>
        <td>{{obj.price}}</td>
        <td><button @click="obj.num--">-</button>{{obj.num}}<button @click="obj.num++">+</button></td>
        <td>{{obj.price*obj.num}}</td>
        <td><button @click="del(obj.name)">删除</button></td>
    </tr>
</template>

<script>
export default {
    name: 'VuestudyTr',
    props:{
        obj:{
            type:Object,
            default:()=>({})
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        del(val){
            let index=this.$parent.goodList.findIndex( (ele)=> ele.name==val );
            this.$parent.goodList.splice(index, 1);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>