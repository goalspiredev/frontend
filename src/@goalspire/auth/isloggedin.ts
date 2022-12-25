import Axios from 'axios';

export default async function isloggedin(): Promise<boolean> {
	await Axios.get('/api/auth/isloggedin')
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});

	return false;
}
