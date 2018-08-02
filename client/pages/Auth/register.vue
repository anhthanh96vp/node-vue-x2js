<template>
<div class="form_register">
    <el-form ref="form" label-width="120px" size="medium">
  <el-form-item  label="First name">
    <el-input type="text" v-model="newUser.first_name"></el-input>
  </el-form-item>
  <el-form-item type="text" label="Last Name">
    <el-input v-model="newUser.last_name"></el-input>
  </el-form-item>
  <el-form-item type="email" label="Email">
    <el-input v-model="newUser.email"></el-input>
  </el-form-item>
  <el-form-item type="password" label="Password">
    <el-input v-model="newUser.password"></el-input>
  </el-form-item>
  <el-form-item type="password" label="Confirm">
    <el-input></el-input>
  </el-form-item>
  <el-form-item type="number" label="Phone">
    <el-input v-model="newUser.phone"></el-input>
  </el-form-item>
  <el-form-item>
      <el-button type="primary" @click="register">Register</el-button>
  </el-form-item>
</el-form>
</div>
</template>


<style scoped>
.form_register {
	margin: 0 auto;
	max-width: 35%;
}
</style>


<script>
import Auth from "@/api/Auth"

export default {
	data() {
		return {
			newUser: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				phone: ""
			}
		}
	},
	methods: {
		async register() {
			let newUser = this.newUser
			const response = await Auth.register(newUser)
			if (response.data.status == 200) {
				console.log("response.data.status :", response.data.status)
				this.$router.push("/auth/login")
			}
		}
	}
}
</script>