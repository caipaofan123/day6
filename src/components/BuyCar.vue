<template>
  <div>
    <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model='isAll'/> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>

      </thead>
      <tbody>
        <Tr v-for="(item,index) in goodList" :key="index" :obj="item"></Tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">
            总件数:{{count}} 总价:{{allPrice}}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Tr from './Tr.vue'
export default {
  components:{
    Tr,
  },
  computed:{
    count(){
        return this.goodList.reduce((sum,item)=>{
            return sum + item.num
        },0)
    },
    allPrice(){
        return this.goodList.reduce((sum,item)=>{
            return sum + item.num*item.price
        },0)
    },
    isAll:{
        get(){
            return this.goodList.every(ele => ele.checked)
        },
        set(val) {
            this.goodList.forEach(ele => ele.checked=val)
        }
    }
  },
  data() {
    return {
    
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>