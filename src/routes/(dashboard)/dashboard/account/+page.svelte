<script lang="ts">
	import Button from '$components/forms/Button.svelte';
	import PasswordInput from '$components/forms/PasswordInput.svelte';
	import TextInput from '$components/forms/TextInput.svelte';
	import type { JWTType } from '$goalspire/types/JWTType';
	import { storedToken } from '$stores/token.store';
	import jwtDecode from 'jwt-decode';
	import { get } from 'svelte/store';
	import { useGoalspire } from '$goalspire/useGoalspire';
	import { goto } from '$app/navigation';

	const { changePassword, logout } = useGoalspire;

	const token = get(storedToken);
	let decode: JWTType;

	let name: string = '';
	let email: string = '';

	if (token) {
		decode = jwtDecode(token);
		name = decode.name;
		email = decode.email;
	}

	let currentPassword: string = '';
	let newPassword: string = '';
	let confirmPassword: string = '';

	let error: string = '';
	let success: string = '';

	async function changeP() {
		changePassword(currentPassword, newPassword, confirmPassword)
			.then((res) => {
				error = '';
				success = 'Password changed successfully';
			})
			.catch((err) => {
				error = err;
				success = '';
			});
	}

	async function logout_() {
		logout().then(() => {
			goto('/');
		});
	}
</script>

<template>
	<div class="wrap">
		<div class="head">
			<h1>
				<input
					type="text"
					name=""
					id=""
					placeholder="Enter your name..."
					bind:value={name}
					class="title"
				/>
			</h1>
			<h3>
				{email}
			</h3>
		</div>
		{#if error}
			<div class="error">
				{error}
			</div>
		{/if}
		{#if success}
			<div class="success">
				{success}
			</div>
		{/if}
		<div class="forms">
			<div class="form">
				<PasswordInput bind:value={newPassword}>New password</PasswordInput>
				<PasswordInput bind:value={confirmPassword}>Confirm new password</PasswordInput>
				<Button on:submit={() => changeP()}>CHANGE PASSWORD</Button>
			</div>
		</div>
		<Button on:submit={() => logout_()}>LOGOUT</Button>
	</div>
</template>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		font-family: 'Montserrat', sans-serif;
		gap: 3rem;
		width: 100%;
		height: 100vh;
		padding: 3rem 1rem 0 1rem;

		@include br-sm {
			padding: 3rem 0 0 0;
		}
	}

	.head {
		display: flex;
		flex-direction: column;

		h1 {
			font-size: 2rem;
			font-weight: 600;

			@include br-sm {
				font-size: 3rem;
			}
		}

		h3 {
			font-size: 1.2rem;
			font-weight: 500;
			user-select: none;

			@include br-sm {
				font-size: 2rem;
			}
		}

		.title {
			border: none;
			outline: none;

			&:focus {
				outline: 2px solid var(--red);
				border-radius: 16px;
			}

			&::placeholder {
				color: #7a7a7a;
			}
		}
	}

	.forms {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 4rem;

		@include br-md {
			flex-direction: row;
			gap: 2rem;
		}
	}

	.form {
		width: 90%;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@include br-md {
			width: 50%;
		}
	}

	.error {
		color: var(--red);
		font-size: 1.2rem;
		font-weight: 500;
		text-align: center;
	}

	.success {
		color: var(--green);
		font-size: 1.2rem;
		font-weight: 500;
		text-align: center;
	}
</style>
