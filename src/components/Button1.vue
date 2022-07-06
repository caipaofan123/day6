<template>
  <button>
    按钮组件
  </button>
  <!-- 
    封装一组按钮插件
    1. 按钮的内容可以支持自定义
    2. 按钮的类型只有4种 primary success warning danger，
    需入其他的需要校验
   -->
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellow;
}
.one-button-danger {
  background-color: red;
}
</style>
