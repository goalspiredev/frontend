import { API_URL } from '$goalspire/global';
import Axios from 'axios';

export default async function isloggedin(): Promise<boolean> {
	await Axios.get(API_URL + '/api/auth/isloggedin')
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});

	return false;
}
