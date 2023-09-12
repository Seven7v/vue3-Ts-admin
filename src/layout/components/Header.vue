<template>
  <div class="mod-header bg-blod disflex sp-btw ai-cen">
    <div class="disflex">
      <img class="logo-img mr15" src="../../assets/img/logo.svg" alt="" />
      <h1>
        {{ $t('header.welcome') }}
      </h1>
    </div>
    <changeLanguage class="mr10" />
  </div>
</template>

<script setup lang="ts">
import changeLanguage from '../../pages/components/changeLanguage.vue'
</script>

<style scoped>
.mod-header {
  height: 80px;
}
.logo-img {
  width: 70px;
}
</style>
