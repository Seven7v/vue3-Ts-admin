<template>
  <div class="mod-header bg-blod disflex sp-btw ai-cen">
    <div class="disflex">
      <img class="logo-img mr15" src="../../assets/img/logo.svg" alt="" />
      <h1>
        {{ $t('header.welcome') }}
      </h1>
    </div>
    <div>
      <changeLanguage class="mr10" />
      <el-button class="mr10 logout-btn" link>{{ $t('login.logout') }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import changeLanguage from '../../pages/components/changeLanguage.vue'
</script>

<style lang="less">
.mod-header {
  height: 80px;
  .logout-btn {
    color: #fff;
  }
  .logout-btn:hover {
    color: aliceblue;
  }
}
.logo-img {
  width: 70px;
}
</style>
