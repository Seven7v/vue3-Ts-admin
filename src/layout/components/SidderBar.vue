<template>
  <div>
    <el-menu
      default-active="1-1"
      @open="handleOpen"
      @close="handleClose"
      class="el-menu-vertical-demo h100"
      :collapse="isCollapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import routes from '../../routes/routes.ts'
import { RouteRecordRaw } from 'vue-router'
import { ref, onMounted, watchEffect, reactive } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const screenWidth = ref(
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
)
const isCollapse = ref(false)
const handleRouter = (route: RouteRecordRaw[]): RouteRecordRaw[] => {
  let subRoute: RouteRecordRaw[] = []
  subRoute = route.filter(item => {
    if (item.children) {
      handleRouter(item.children)
    }
    return item.meta && item.meta.isNav
  })
  return subRoute
}
const subMenu: RouteRecordRaw[] = handleRouter(routes)
console.log(subMenu)

onMounted(() => {
  window.onresize = () => {
    return (() => {
      screenWidth.value =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    })()
  }
})
watchEffect(() => {
  if (screenWidth.value < 700) {
    isCollapse.value = true
  } else {
    isCollapse.value = false
  }
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
