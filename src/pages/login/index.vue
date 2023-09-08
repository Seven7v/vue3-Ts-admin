<template>
  <div class="login">
    <div class="login-form-wrapper">
      <div class="login-img-wrapper">
        <div class="login-title">{{ $t('login.management') }}</div>
        <img class="login-img" src="../../assets/img/login.svg" alt="" />
      </div>
      <div class="login-box">
        <el-card class="login-inner">
          <el-form
            ref="formRef"
            :model="dynamicValidateForm"
            label-width="120px"
            class="login-form"
          >
            <el-form-item
              prop="username"
              :label="t('login.username')"
              :rules="[
                {
                  required: true,
                  message: t('login.usernameRequire'),
                  trigger: 'blur'
                }
              ]"
            >
              <el-input v-model="dynamicValidateForm.username" />
            </el-form-item>
            <el-form-item
              prop="password"
              :label="t('login.password')"
              :rules="[
                {
                  required: true,
                  message: t('login.passwordRequire'),
                  trigger: 'blur'
                }
              ]"
            >
              <el-input v-model="dynamicValidateForm.username" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
              <el-button @click="resetForm(formRef)">Reset</el-button>
              <changeLanguage />
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { InterfaceLoginReq } from '../../type'
import { useI18n } from 'vue-i18n'
import changeLanguage from '../components/changeLanguage.vue'

const { t } = useI18n()
console.log(t)
console.log(t('username'))

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<InterfaceLoginReq>({
  username: '',
  password: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
  }
  &-img-wrapper {
    width: 50%;
    background-color: #1e20d3cf;
  }
  &-title {
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;
    font-weight: 900;
    margin-top: 200px;
    margin-bottom: 200px;
    margin-left: 100px;
  }
  &-img {
    width: 600px;
    margin-left: 30%;
  }
  &-form {
    margin-right: 60px;
  }
  &-box {
    width: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-inner {
    width: 500px;
    height: 400px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
