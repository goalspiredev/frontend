import { API_URL } from '$goalspire/global';
import { storedToken } from '$stores/token.store';
import Axios from 'axios';
import { get } from 'svelte/store';
import type {GoalType} from "../types/GoalType";

export default async function getGoal(id: string): Promise<GoalType> {
	return await Axios.get(API_URL + '/goals/' + id + '/', {
		headers: {
			Authorization: `Bearer ${get(storedToken)}`
		}
	}).then((res) => {
		return res.data;
	});
}
