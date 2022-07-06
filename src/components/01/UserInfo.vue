<template>
  <div>
      <div>
          <span>人生格言:</span>
          <input type="text">
      </div>
      <div>
          <span>个人简介:</span>
          <textarea></textarea>
      </div>
  </div>
</template>
<script>
export default {
    created(){
        console.log('created---Userinfo');
    },
    deactivated(){
        console.log('deactivated---Userinfo');
    },
    destroyed(){
        console.log('destroyed---Userinfo');
    },
    activated(){
        console.log('activated---Userinfo');
    }
}
</script>