<template>
  <div class="mod-homepage">
    <el-carousel trigger="click" class="banner" height="80px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <div class="banner-item">{{ t(`homePage.${item.value}`) }}</div>
      </el-carousel-item>
    </el-carousel>
    <div class="dashbord-data p20">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { UserInfoRes } from '../../type'
import { reactive, ref } from 'vue'
import { sendMessage } from '../../sever/data'
const { t } = useI18n()
const userInfo: UserInfoRes = JSON.parse(localStorage.getItem('userInfo'))

const bannerList = reactive([
  {
    id: 1,
    value: 'useV3TS'
  },
  {
    id: 2,
    value: 'sevice',
    url: 'https://github.com/Seven7v/node-admin'
  },
  {
    id: 3,
    value: 'url',
    url: 'https://github.com/Seven7v/vue3-Ts-admin'
  }
])

const handleSendMessage = async () => {
  const message = {
    username: userInfo.username,
    message: '这里是测试一条消息提示',
    sendTime: new Date()
  }
  const res = await sendMessage(message)
  console.log(res)
}
handleSendMessage()
</script>

<style lang="less">
.mod-homepage {
  .banner {
    width: 100%;
  }
  .el-carousel__item .banner-item {
    width: 100%;
    text-align: center;
    color: #fbfcfc;
    opacity: 0.75;
    line-height: 80px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background: linear-gradient(to bottom right, rgb(112, 112, 249), rgb(14, 154, 205));
  }

  .el-carousel__item:nth-child(2n + 1) {
    background: linear-gradient(to bottom right, blue, pink);
  }
  .dashbord-data {
    display: flex;
    width: 100%;
    .box-card {
      width: 25%;
    }
  }
}
</style>
