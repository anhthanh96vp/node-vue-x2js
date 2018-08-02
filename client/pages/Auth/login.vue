<template>
    <div class="login">
        <el-form ref="form" label-width="120px" size="medium">
  <el-form-item  label="Email">
    <el-input v-model="user.email"></el-input>
  </el-form-item>
  <el-form-item  label="Password">
    <el-input v-model="user.password"></el-input>
  </el-form-item>
  <el-form-item>
      <el-button type="primary" @click="login">Login</el-button>
  </el-form-item>
</el-form>
   </div>
</template>



<style scoped>
.login {
	margin: 0 auto;
	max-width: 35%;
}
</style>

<script>
import Auth from "@/api/Auth"

export default {
	data() {
		return {
			user: {
				email: "",
				password: ""
			}
		}
	},
	methods: {
		async login() {
			let user = this.user
			const response = await Auth.login(user)
			if (response.data.status == 200) {
				this.$router.push("/")
			}
		}
	}
}
</script>