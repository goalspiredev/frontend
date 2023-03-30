import { API_URL } from '$goalspire/global';
import { storedToken } from '$stores/token.store';
import Axios from 'axios';
import { get } from 'svelte/store';
import type {SettingsType} from "$goalspire/types/SettingsType";

export default async function getSettings(): Promise<SettingsType> {
	return await Axios.get(API_URL + '/settings/', {
		headers: {
			Authorization: `Bearer ${get(storedToken)}`
		}
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw err;
		});
}
