import Axios from 'axios';

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

	if (!password) {
		throw new Error('Password is required');
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

	return await Axios.post('/api/auth/register', { username, email, password });
}
