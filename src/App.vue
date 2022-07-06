<template>
  <div id="app">
    <!-- <Day6></Day6> -->
    <!-- <ShopCar></ShopCar> -->
    <!-- <UseD></UseD> -->
    <!-- <PanelVue>
      <p>123112314</p>
    </PanelVue>
    <PanelVue>
      <img src="./assets/logo.png" alt="">
    </PanelVue>
    <PanelVue>
    </PanelVue>
    <PanelVue>
      <p>999999</p>
    </PanelVue>
    <PanelVue>
      <template v-slot:title>
        <h4>你真大大大大哈欠</h4>
      </template>
      <template v-slot:content="scope">
        <img src="./assets/123.jpg" alt="">
        <p>{{scope.obj.a}}</p>
      </template>
    </PanelVue> -->
    <!-- <useslotVue></useslotVue> -->
    <!-- <TabbarVue></TabbarVue> -->
    <!-- <register></register> -->
    <usetableVue></usetableVue>
  </div>
</template>

<script>
import Day6 from './views/Day6.vue'
import ShopCar from './views/ShopCar.vue'
import UseD from './views/01_UseDynamic.vue'
import TabbarVue from './views/Tabbar.vue'
import PanelVue from './views/Panel.vue'
import useslotVue from './views/useslot.vue'
import register from './views/register.vue'
import usetableVue from './views/usetable.vue'
export default {

  components: {
    Day6,
    ShopCar,
    UseD,
    TabbarVue,
    PanelVue,
    useslotVue,
    register,
    usetableVue,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
