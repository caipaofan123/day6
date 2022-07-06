<template>
  <div>
      <table border="1">
          <thead>
              <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in list" :key="index">
                  <td>{{index+1}}</td>
                  <!-- <td>{{item.name}}</td> -->
                  <td>{{item.name}}<br/><slot name="name" :item="item"></slot></td>
                  <!-- <td>{{item.age}}</td> -->
                  <td>{{item.age}}<br/><slot name="age" :item="item"></slot></td>
                  <!-- <td>{{item.headImgUrl}}</td> -->
                  <!-- <td><img :src="item.headImgUrl"/></td> -->
                  <td><slot name="img" :item="item"></slot></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    props:['list']
}
</script>