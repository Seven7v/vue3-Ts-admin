<template>
  <div class="mod-homepage">
    <el-carousel trigger="click" class="banner" height="150px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <div class="banner-item">{{ t(`homePage.${item.value}`) }}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { reactive, ref } from 'vue'
const { t } = useI18n()

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
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background: linear-gradient(to bottom right, rgb(112, 112, 249), rgb(14, 154, 205));
  }

  .el-carousel__item:nth-child(2n + 1) {
    background: linear-gradient(to bottom right, blue, pink);
  }
}
</style>
