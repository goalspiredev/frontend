import { API_URL } from '$goalspire/global';
import Axios from 'axios';

export default async function verifyUser(code: string, email: string): Promise<boolean> {
	return await Axios.post(API_URL + '/auth/confirm-email', {
		token: code,
		email: email
	})
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});
}
