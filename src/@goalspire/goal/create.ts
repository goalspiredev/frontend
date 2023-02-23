import { API_URL } from '$goalspire/global';
import { storedToken } from '$stores/token.store';
import Axios from 'axios';
import { get } from 'svelte/store';

export default async function createGoal(
	title: string,
	type: string,
	priority: string,
	tags: string[],
	date: Date,
	desc: string
): Promise<void> {
	let goalType = type === 'goal' ? 0 : 1;
	let goalPriority =
		priority === 'urgent' ? 0 : priority === 'important' ? 1 : priority === 'medium' ? 2 : 3;

	if (!title) {
		throw new Error('Title is required');
	} else if (!type) {
		throw new Error('Type is required');
	} else if (!priority) {
		throw new Error('Priority is required');
	} else if (!date) {
		throw new Error('Date is required');
	} else if (!desc) {
		throw new Error('Description is required');
	}

	// console.log(email, password, remember);
	return await Axios.post(
		API_URL + '/goals',
		{
			type: goalType,
			title: title,
			content: desc,
			priority: goalPriority,
			tags: tags,
			endsAt: new Date(date).toISOString()
		},
		{
			headers: {
				Authorization: `Bearer ${get(storedToken)}`
			}
		}
	).then((res) => {
		return res.data;
	});
}
