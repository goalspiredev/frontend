import { API_URL } from "$goalspire/global";
import { storedToken } from "$stores/token.store";
import Axios from "axios";
import { get } from "svelte/store";

export default async function changePassword(
	oldP: string,
	newP: string,
	confirmP: string
): Promise<void> {
	if (newP !== confirmP) {
		throw new Error('Passwords do not match');
	}

	return await Axios.post(
		API_URL + '/auth/change-password',
		{
			newPassword: newP,
			oldPassword: oldP
		},
		{
			headers: {
				Authorization: `Bearer ${get(storedToken)}`
			}
		}
	).then(() => {
		return;
	})
	.catch((err) => {
		throw new Error(err.data.description);
	});
}
