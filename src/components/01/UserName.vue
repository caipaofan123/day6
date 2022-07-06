<template>
  <div>
      <div>
          <span>用户名:</span>
          <input type="text">
      </div>
      <div>
          <span>密码:</span>
          <input type="password">
      </div>
  </div>
</template>

<script>
export default {
    created(){
        console.log('created---Username');
    },
    destroyed(){
        console.log('destroyed---Username');
    },
    activated(){
        console.log('activated---Username');
    },
    deactivated(){
        console.log('deactivated---Username');
    }
}
</script>