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
	tags: string[],
	date: Date | undefined,
	oldDate: Date,
	desc: string,
	completed: boolean
): Promise<void> {
	let goalType = type === 'goal' ? 0 : 1;
	let goalPriority =
		priority === 'urgent' ? 0 : priority === 'important' ? 1 : priority === 'medium' ? 2 : 3;

	let data = {
		type: goalType,
		title: title,
		content: desc,
		priority: goalPriority,
		tags: tags,
		completed: Boolean(completed),
		endsAt: date ? new Date(date).toISOString() : new Date(oldDate).toISOString()
	};

	if (!title) {
		throw new Error('Title is required');
	} else if (!type) {
		throw new Error('Type is required');
	} else if (!priority) {
		throw new Error('Priority is required');
	} else if (!data.endsAt) {
		throw new Error('Date is required');
	} else if (!desc) {
		throw new Error('Description is required');
	}

	await Axios.put(
		`${API_URL}/goals/${id}`,
		data,
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
		tags: goal.tags,
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
