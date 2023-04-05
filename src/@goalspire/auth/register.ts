import { API_URL } from '$goalspire/global';
import Axios from 'axios';
import { validateEmail, validatePassword } from '../validation/validate';

export default async function register(
	username: string,
	email: string,
	password: string,
	confirmPassword: string,
	terms: boolean,
	service: boolean
) {
	if (!username) {
		throw new Error('Username is required');
	}

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

	if (!confirmPassword) {
		throw new Error('Confirm password is required');
	}

	if (password !== confirmPassword) {
		throw new Error('Passwords do not match');
	}

	if (!terms) {
		throw new Error('You must agree to the terms and conditions');
	}

	if (!service) {
		throw new Error('You must agree to the service terms');
	}

	return await Axios.post(API_URL + '/auth/register', {
		username: username,
		email: email,
		password: password
	}).catch((err) => {
		throw new Error(err.response.data.error);
	});
}
