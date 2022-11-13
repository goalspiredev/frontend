<script lang="ts">
	import TextInput from '../TextInput.svelte';
	import PasswordInput from '../PasswordInput.svelte';
	import Checkbox from '../Checkbox.svelte';
	import Button from '../Button.svelte';

	let username: string = '';
	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';
	let terms: boolean = false;
	let protection: boolean = false;
</script>

<div class="formWrap">
	<div class="head">
		<h1>Create an account</h1>
		<h3>Enter your registration details</h3>
	</div>

	<form>
		<TextInput bind:value={username}>Username</TextInput>

		<TextInput bind:value={email}>Email</TextInput>

		<PasswordInput bind:value={password}>Password</PasswordInput>

		<PasswordInput bind:value={confirmPassword}>Confirm Password</PasswordInput>

		<div class="check">
			<Checkbox bind:value={terms}>Agree with Terms of Service</Checkbox>
			<Checkbox bind:value={protection}>Accept the terms of Personal Data Protection</Checkbox>
		</div>

		<div class="submit">
			<Button>REGISTER</Button>
			<p>Already registered? <a href="/login">Log into your account</a></p>
		</div>
	</form>
</div>

<style lang="scss">
	.formWrap {
		height: 100vh;
        padding-top: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-right: 1rem;
        padding-left: 1rem;
		gap: 2rem;
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
			align-items: center;
			gap: 1rem;

			.check {
				max-width: 480px;
				width: 100%;
				min-width: 300px;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				gap: 0.5rem;
				margin-bottom: 1.5rem;
			}

			.submit {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5rem;
				margin-bottom: 1.5rem;

				p {
					font-size: 1rem;
					font-weight: 500;
					color: var(--gray);
					text-align: center;

					a {
						color: var(--red);
						cursor: pointer;

                        &:hover {
                            text-decoration: underline;
                        }
					}
				}
			}
		}
	}
</style>
