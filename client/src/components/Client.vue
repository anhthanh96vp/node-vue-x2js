<template>
<div class="card">
    <h5 class="card-header info-color white-text text-center py-4">
        <strong>Client</strong>
    </h5>
    <div class="card-body px-lg-5 pt-0">
        
     </div>
</div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationServices"
import client from '../helper/HttpClient'
export default {
	data() {
		return {
			
		}
	},
	methods: {
		async client() {
			client.get('/users').then((response) => {
                console.log(response);
            });
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
