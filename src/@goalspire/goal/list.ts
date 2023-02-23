import { API_URL } from '$goalspire/global';
import { storedToken } from '$stores/token.store';
import Axios from 'axios';
import { get } from 'svelte/store';
import type {GoalType} from "../types/GoalType";

export default async function getGoals(): Promise<any> {
	let goals: GoalType[] = [];
	goals = await Axios.get(API_URL + '/goals', {
		headers: {
			Authorization: `Bearer ${get(storedToken)}`
		}
	}).then((res) => {
		return res.data;
	});

	return goals;
}
