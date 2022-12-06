<script lang="ts">
	import RegisterForm from '$lib/Register/RegisterPage.svelte';
</script>

<RegisterForm
	onSubmitCallback={(username, email, password) => {
		console.log(username, email, password);
	}}
/>
