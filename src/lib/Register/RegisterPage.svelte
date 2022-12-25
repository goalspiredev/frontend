<script lang="ts">
	import TextInput from '$components/forms/TextInput.svelte';
	import PasswordInput from '$components/forms/PasswordInput.svelte';
	import Checkbox from '$components/forms/Checkbox.svelte';
	import Button from '$components/forms/Button.svelte';
	import { useGoalspire } from '$goalspire/useGoalspire';

	const { register } = useGoalspire;

	let username = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let terms = false;
	let protection = false;

	let errorMessage = ' ';
</script>

<div class="formWrap">
	<div class="head">
		<h1>Create an account</h1>
		<h3>Enter your registration details</h3>
	</div>

	<form on:submit|preventDefault>
		<TextInput name="username" bind:value={username}>Username</TextInput>

		<TextInput name="email" bind:value={email}>Email</TextInput>

		<PasswordInput name="password" bind:value={password}>Password</PasswordInput>

		<PasswordInput name="confirm_password" bind:value={confirmPassword}
			>Confirm Password</PasswordInput
		>

		<div class="check">
			<Checkbox name="service" bind:value={terms}>Agree with Terms of Service</Checkbox>
			<Checkbox name="protection" bind:value={protection}
				>Accept the terms of Personal Data Protection</Checkbox
			>
		</div>

		<p class="error">{errorMessage}</p>

		<div class="submit">
			<Button
				on:submit={() =>
					register(username, email, password, confirmPassword, terms, protection)
						.then(() => {
							username = '';
							email = '';
							password = '';
							confirmPassword = '';
							terms = false;
							protection = false;
							window.location.href = '/confirm';
						})
						.catch((er) => {
							errorMessage = er;
						})}>REGISTER</Button
			>
			<p>Already registered? <a href="/login">Log into your account</a></p>
		</div>
	</form>
</div>

<style lang="scss" scoped>
	.error {
		color: var(--red);
	}

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
