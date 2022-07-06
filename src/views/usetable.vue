<template>
    <div>
        <table1>
            <template v-slot:id="scope">
                <input type="text" name="" id="" v-model="scope.item.id">
            </template>
            <template v-slot:name="scope">
                <input type="text" name="" id="" v-model="scope.item.name">
            </template>
            <template v-slot:age="scope">
                <input type="text" name="" id="" v-model="scope.item.age">
            </template>
            <template v-slot:img="scope">
                <a href="scope.item.headImgUrl" v-if="scope.item.type==0">{{scope.item.headImgUrl}}</a>
                <img :src="scope.item.headImgUrl" alt="" v-else-if="scope.item.type==1">
                <p v-else>{{scope.item.headImgUrl}}</p>
            </template>
        </table1>
    </div>
</template>

<script>
import table1 from './table.vue'
export default {
    name: 'VuestudyUsetable',

    data() {
        return {
            
        };
    },
    components:{
        table1,
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>