<template>
  <div class="relative p-[10px]">
    <div
      @click="router.push({ name: routeNames.welcome })"
      class="absolute top-[5px] left-[10px] cursor-pointer"
    >
      <img src="../images/AuthPage/arrow-back.svg" alt="" />
    </div>
    <h3 class="text-[#212325] text-[18px] font-semibold text-center">
      Sign Up
    </h3>

    <el-form
      class="mt-[60px]"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          class="w-full h-[40px]"
          placeholder="Name"
          v-model="ruleForm.username"
        />
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          type="email"
          class="w-full h-[40px]"
          placeholder="Email"
          v-model="ruleForm.email"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          class="w-full h-[40px]"
          placeholder="Password"
          v-model="ruleForm.password"
        />
      </el-form-item>
      <br />
      <el-form-item>
        <el-button
          @click="submitForm(ruleFormRef)"
          class="w-full"
          style="height: 45px; border-radius: 16px; font-size: 18px"
          color="#7F3DFF"
          >Sign Up</el-button
        >
      </el-form-item>
      <p class="text-center text-[#91919F] font-bold mb-[18px]">Or With</p>
      <el-form-item>
        <el-button
          @click="submitForm(ruleFormRef)"
          class="w-full"
          style="
            height: 45px;
            border-radius: 16px;
            font-size: 18px;
            color: black;
            border: 1px solid #f1f1fa;
          "
          color="#FCFCFC"
        >
          <div class="mr-[10px]">
            <img src="../images/AuthPage/google-icon.svg" alt="" />
          </div>
          Sign Up with Google</el-button
        >
      </el-form-item>
    </el-form>
    <div class="text-center">
      <span class="text-[#91919F]"> Already have an account? </span>
      <router-link
        class="text-[#7F3DFF] underline"
        :to="{ name: routeNames.login }"
        >Login</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { routeNames } from '../router/routes'
// import { goBackOrRedirect } from '../utils/index.js'
const router = useRouter()
const ruleFormRef = ref()
const ruleForm = ref({
  username: '',
  email: '',
  password: '',
})

const rules = ref({
  username: [
    { required: true, message: 'Please input your name', trigger: 'blur' },
    { min: 2, message: 'Length should be at least 3 symbol', trigger: 'blur' },
  ],
  email: [
    {
      required: true,
      message: 'Please input email address',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    {
      min: 6,
      message: 'Length should be from 6 characters',
      trigger: 'blur',
    },
  ],

  agreement: [
    {
      type: 'checkbox',
      required: true,
      message: 'You have to read and agree',
      trigger: 'change',
    },
  ],
})

const route = useRoute()
// const goBackOrRedirect = () => {
//   if (если мой сайт) {
//     router.go(-1)
//   } else {
//     router.push({ name: routeNames.welcome })
//   }
// }

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      router.push('/home')
      console.log('submit!')
      // Регистрация делать firebase
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style></style>
