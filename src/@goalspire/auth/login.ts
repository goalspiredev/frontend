import Axios from 'axios';

export default async function login(email: string, password: string, remember: boolean) {
	if (!email) {
		throw new Error('Email is required');
	}

	if (!password) {
		throw new Error('Password is required');
	}

	console.log(email, password, remember);
	return await Axios.post('/api/auth/login', { email, password, remember });
}
