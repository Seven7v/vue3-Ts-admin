<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import { useI18n } from 'vue-i18n'

// 切换语言
const { proxy } = getCurrentInstance() as any
const $t = useI18n()
const lang = ref('chinese')

const changeLanguage = (type: String) => {
  console.log('当前选择的语言:' + type)
  switch (type) {
    case 'chinese':
      proxy.$i18n.locale = 'zh'
      localStorage.setItem('lang', 'zh')
      break
    case 'english':
      proxy.$i18n.locale = 'en'
      localStorage.setItem('lang', 'en')
      break
  }
}
</script>

<template>
  <el-select style="width: 100px" v-model="lang" @change="changeLanguage">
    <el-option label="中文" value="chinese" />
    <el-option label="英文" value="english" />
  </el-select>
</template>
