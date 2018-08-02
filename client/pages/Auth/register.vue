<template>
<div class="form_register">
  <el-form  status-icon :rules="rulesRegister" :model="newUser" ref="register" label-width="120px" size="medium"  class="demo-ruleForm">
  <el-form-item label="First name" prop="first_name">
    <el-input v-model="newUser.first_name" ></el-input>
  </el-form-item>
  <!-- <el-form-item  label="Last Name" prop="last_name">
    <el-input type="text" v-model="newUser.last_name"></el-input>
  </el-form-item >
  <el-form-item label="Email" prop="email">
    <el-input type="email" v-model="newUser.email"></el-input>
  </el-form-item>
  <el-form-item label="Password" prop="password">
    <el-input type="password" v-model="newUser.password"></el-input>
  </el-form-item>
  <el-form-item  label="Confirm" prop="repassword" >
    <el-input type="password" v-model="repassword" ></el-input>
  </el-form-item>
  <el-form-item  label="Phone" prop="phone">
    <el-input type="text" v-model="newUser.phone"></el-input>
  </el-form-item> -->
  <el-form-item>
      <el-button type="primary" @click="submitRegister('register')">Register</el-button>
  </el-form-item>
</el-form>
</div>
</template>


<style scoped>
.form_register {
	width: 50%;
}
</style>


<script>
import Auth from "@/api/Auth"

export default {
	data() {
		var checkFirstName = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("Please input the first name"))
			}
			if (!Number.isInteger(value)) {
				callback(new Error("Please input digits"))
			} else {
				if (value < 18) {
					callback(new Error("Age must be greater than 18"))
				} else {
					callback()
				}
			}
		}
		return {
			repassword: "",
			newUser: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				phone: ""
			},
			rulesRegister: {
				first_name: [{ validator: checkFirstName, trigger: "blur" }]
			}
		}
	},
	methods: {
		async submitRegister() {
			let newUser = this.newUser
			const response = await Auth.register(newUser)
			if (response.data.status == 200) {
				this.$router.push("/auth/login")
			}
		}
	}
}
</script>
