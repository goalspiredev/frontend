<script lang="ts">
	import TextInput from '$components/forms/TextInput.svelte';
	import PasswordInput from '$components/forms/PasswordInput.svelte';
	import Checkbox from '$components/forms/Checkbox.svelte';
	import Button from '$components/forms/Button.svelte';
	import { validateEmail, validatePassword, validateUsername } from '$utils/validate.util';

	let email = '';
	let password = '';
	let rememberMe = false;

	export let onSubmitCallback: (email: string, password: string, rememberMe: boolean) => void;

	function onSubmit() {
		if (!validateEmail(email) || !validatePassword(password) || !validateUsername(email)) {
			// TODO: show error
			return;
		}
		onSubmitCallback(email, password, rememberMe);
	}
</script>

<div class="formWrap">
	<div class="head">
		<h1>Go reach those goals!</h1>
		<h3>Log in to manage your goals</h3>
	</div>

	<form>
		<TextInput bind:value={email}>Email</TextInput>

		<PasswordInput bind:value={password}>Password</PasswordInput>

		<div class="check">
			<Checkbox bind:value={rememberMe}>Remember me</Checkbox>
		</div>

		<div class="submit">
			<Button on:submit={onSubmit}>LOG IN</Button>
			<p>Not yet registered? <a href="/register">Create your account</a></p>
			<p>Forgot password? <a href="/register">Support</a></p>
		</div>
	</form>
</div>

<style lang="scss" scoped>
	.formWrap {
		height: 100vh;
		padding: 5rem 1rem 0 1rem;

		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;

		font-family: 'Quicksand', sans-serif;

		@include br-xl {
			padding-top: 0;
		}

		.head {
			display: flex;
			flex-direction: column;
			text-align: center;

			h1 {
				font-size: 2.5rem;
				font-weight: bold;
				color: var(--black);
			}

			h3 {
				font-size: 1.2rem;
				font-weight: 500;
			}
		}

		form {
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: center;

			.check {
				width: 100%;
				max-width: 480px;
				min-width: 300px;
				margin-bottom: 1.5rem;

				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				justify-content: flex-start;
			}

			.submit {
				width: 100%;
				margin-bottom: 1.5rem;

				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				align-items: center;

				p {
					text-align: center;

					font-size: 1rem;
					font-weight: 500;
					color: var(--gray);

					a {
						cursor: pointer;

						color: var(--red);

						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
</style>
