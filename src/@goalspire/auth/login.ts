import Axios from 'axios';
import {validateEmail, validatePassword} from "../validation/validate";

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
		throw new Error('Password is invalid. (At least 9 characters, 1 capital letter, 1 number is required)');
	}

	// console.log(email, password, remember);
	return await Axios.post('/api/auth/login', { email, password, remember });
}
