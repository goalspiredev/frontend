<script lang="ts">
	import LoginForm from '$lib/Login/LoginPage.svelte';
</script>

<LoginForm
	onSubmitCallback={(email, password, rememberMe) => {
		console.log(email, password, rememberMe);
	}}
/>
