<template>
    <div>
        <button @click="componentN='phoneVue'">手机注册</button>
        <button @click="componentN='emailVue'">邮箱注册</button>
        <div>
            <keep-alive>
                <component :is="componentN">
                    <template v-slot:area="scope">
                        <span>选择所在地区</span><br>
                        <label v-for="(item) in scope.whe" :key="item.id">
                        <input type="radio" name="" id="">{{item.area}}&nbsp;&nbsp;
                        </label>
                    </template>
                    
                    <template v-slot:pwd>
                        <br>
                        <span>登录密码</span><br>
                        <input type="password" name="" id="" value="123456"><br><br>
                        <input type="password" name="" id="" placeholder="再次输入登录密码">
                    </template>

                    <template v-slot:yaoqing>
                        <br>
                        <br>
                        <span>邀请码</span><br>
                        <input type="password" name="" id="" placeholder="输入客户经理邀请码">
                    </template>
                </component>
                
            </keep-alive>
        </div>
    </div>
</template>

<script>
import phoneVue from '@/components/reg/phone.vue';
import emailVue from '@/components/reg/email.vue';
export default {
    name: 'VuestudyRegister',

    data() {
        return {
            componentN:'phoneVue',
        };
    },
    components:{
        phoneVue,
        emailVue,
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>
