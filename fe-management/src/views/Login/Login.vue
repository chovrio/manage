<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    class="demo-ruleForm"
  >
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFn">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'
import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'
import { Login, getUserInfo } from '../../api/index'
const state = reactive({
  ruleForm: {
    username: '',
    pwd: ''
  }
})
const validatePwd = (
  rule: unknown,
  value: string | undefined,
  cb: (msg?: string) => void
) => {
  if (!value) {
    cb('密码不能为空')
  } else {
    cb()
  }
}
// 校验规则
const rules = reactive({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  pwd: [{ validator: validatePwd, trigger: 'blur' }]
})
const { ruleForm } = toRefs(state)
// 获取el-form组件对象
const ruleFormRef = ref()
// 获取项目路由对象
const router = useRouter()
// 点击登录按钮触发
const loginFn = () => {
  ruleFormRef.value
    .validate()
    .then(async () => {
      console.log('校验通过')
      const res = await Login({
        name: ruleForm.value.username,
        password: ruleForm.value.pwd
      })
      // token
      Cookie.set('token', res.result.token, { expires: 30 })
      // 获取用户信息
      const Info = await getUserInfo()
      if (Info.code === 200) {
        router.push('/home')
      }
    })
    .catch((err: unknown) => {
      console.log(err)
      console.log('校验不通过')
    })
  console.log('login')
}
</script>
