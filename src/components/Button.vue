<template>
  
    <button :class="`one-button-${type}`" @click="clickFn">{{title}}</button>
  
</template>

<script>
export default {
  name: 'VuestudyButton',
    props:{
        title:{
            type:String,
            default:'基本按钮'
        },
        type:{
            type:String,
            default:'1',
            validator(val){
                return ['1','2','3','4'].includes(val)
            }
        }
    },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    clickFn(){
        this.$emit('myclick')
    }
  },
};
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
.one-button-1 {
    background: skyblue;

}
.one-button-2 {
    background: hotpink;

}
.one-button-3 {
    background: yellow;

}
.one-button-4 {
    background: red;
}
</style>
