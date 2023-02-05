import { API_URL } from '$goalspire/global';
import Axios from 'axios';
import { validateEmail, validatePassword } from '../validation/validate';
import { storedToken } from '$stores/token.store';

export default async function login(email: string, password: string, remember: boolean) {
	if (!email) {
		throw new Error('Email is required');
	}

	if (!validateEmail(email)) {
		throw new Error('Email is invalid');
	}

	if (!password) {
		throw new Error('Password is required');
	}

	if (!validatePassword(password)) {
		throw new Error(
			'Password is invalid. (At least 9 characters, 1 capital letter, 1 number is required)'
		);
	}

	// console.log(email, password, remember);
	return await Axios.post(API_URL + '/auth/login', {
		email: email,
		password: password,
		rememberMe: Boolean(remember)
	}).then((res) => {
		storedToken.set(res.data.token);
	})
	.catch((err) => {
		console.log(err);
		throw new Error(err.response.data.message);
	});
}
