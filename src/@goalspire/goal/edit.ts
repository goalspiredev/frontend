import { API_URL } from '$goalspire/global';
import { storedToken } from '$stores/token.store';
import Axios from 'axios';
import { get } from 'svelte/store';
import type { GoalType } from '../types/GoalType';

async function editGoal(
	id: string,
	title: string,
	type: string,
	priority: string,
	date: Date,
	desc: string,
	completed: boolean
): Promise<void> {
	let goalType = type === 'goal' ? 0 : 1;
	let goalPriority =
		priority === 'urgent' ? 0 : priority === 'important' ? 1 : priority === 'medium' ? 2 : 3;

	await Axios.put(
		`${API_URL}/goals/${id}`,
		{
			type: goalType,
			title: title,
			content: desc,
			priority: goalPriority,
			endsAt: new Date(date).toISOString(),
			completed: Boolean(completed)
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

async function editGoalWhole(id: string, goal: GoalType): Promise<void> {
	// let goalType = type === 'goal' ? 0 : 1;
	// let goalPriority = priority === 'urgent' ? 0 : priority === 'important' ? 1 : priority === 'medium' ? 2 : 3;
	console.log(goal);

	let data = {
		id: goal.id,
		type: goal.type,
		title: goal.title,
		content: goal.content,
		priority: goal.priority,
		endsAt: new Date(goal.endsAt).toISOString(),
		isCompleted: Boolean(goal.isCompleted)
	};

	console.log(data);
	await Axios.put(`${API_URL}/goals/${id}`, data, {
		headers: {
			Authorization: `Bearer ${get(storedToken)}`
		}
	}).then((res) => {
		console.log(res.data);
		return res.data;
	});
}

export { editGoal, editGoalWhole };
