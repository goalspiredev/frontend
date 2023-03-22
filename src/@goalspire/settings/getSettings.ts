import { API_URL } from "$goalspire/global";
import { storedToken } from "$stores/token.store";
import Axios from "axios";
import { get } from "svelte/store";

export default async function getSettings(): Promise<void> {
	return await Axios.get(
		API_URL + '/settings',
		{
			headers: {
				Authorization: `Bearer ${get(storedToken)}`
			}
		}
	).then((res) => {
		return res.data;
	})
	.catch((err) => {
		throw err;
	});
}
