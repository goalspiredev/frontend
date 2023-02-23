import { storedToken } from '$stores/token.store';
import { get } from 'svelte/store';

export default async function isloggedin(): Promise<boolean> {
	if (get(storedToken)) {
		return true;
	}

	return false;
}
