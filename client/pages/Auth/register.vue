<template>
<div class="card">
    <h5 class="card-header info-color white-text text-center py-4">
        <strong>Sign up</strong>
    </h5>
    <div class="card-body px-lg-5 pt-0">
        <form class="text-center" style="color: #757575;">
            <div class="form-row">
                <div class="col">
                    <div class="md-form">
                        <input v-model="newUser.first_name" type="text" id="materialRegisterFormFirstName" class="form-control">
                        <label for="materialRegisterFormFirstName">First name</label>
                    </div>
                </div>
                <div class="col">
                    <div class="md-form">
                        <input v-model="newUser.last_name" type="text" id="materialRegisterFormLastName" class="form-control">
                        <label for="materialRegisterFormLastName">Last name</label>
                    </div>
                </div>
            </div>
            <div class="md-form mt-0">
                <input v-model="newUser.email" type="email" name="email" id="materialRegisterFormEmail" class="form-control">
                <label for="materialRegisterFormEmail">E-mail</label>
            </div>
            <div class="md-form">
                <input v-model="newUser.password" type="password" name="password"  id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock">
                <label for="materialRegisterFormPassword">Password</label>
                <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>
            </div>           
            <div class="md-form">
                <input v-model="newUser.phone" type="text" id="materialRegisterFormPhone"  class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock">
                <label for="materialRegisterFormPhone">Phone number</label>
                <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>
            </div>
            <button  @click="register" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" >Sign up</button>
            <p>or sign up with:</p>
            <a type="button" class="btn-floating btn-fb btn-sm">
                <i class="fa fa-facebook"></i>
            </a>
            <a type="button" class="btn-floating btn-tw btn-sm">
                <i class="fa fa-twitter"></i>
            </a>
            <a type="button" class="btn-floating btn-li btn-sm">
                <i class="fa fa-linkedin"></i>
            </a>
            <a type="button" class="btn-floating btn-git btn-sm">
                <i class="fa fa-github"></i>
            </a>
            <hr>
            <p>By clicking
                <em>Sign up</em> you agree to our
                <a href="" target="_blank">terms of service</a> and
                <a href="" target="_blank">terms of service</a>. </p>
        </form>
     </div>
</div>
</template>

<script>
import User from "@/api/User"

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
			const newUser = this.newUser
			const response = await User.register(newUser)
			if (response.data.status) {
				this.$router.push("/auth/login")
			}
		}
	}
}
</script>

<style scoped>
.card {
	margin: 0 auto;
	max-width: 50%;
}
</style>