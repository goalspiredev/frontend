import { API_URL } from "$goalspire/global";
import Axios from "axios";

export default async function createGoal(title: string, type: 'goal' | 'task', priority: 'urgent' | 'important' | 'medium' | 'small', date: Date, desc: string): Promise<void> {
    let goalType = type === 'goal' ? 0 : 1;
    let goalPriority = priority === 'urgent' ? 0 : priority === 'important' ? 1 : priority === 'medium' ? 2 : 3;

	// console.log(email, password, remember);
	return await Axios.post(API_URL + '/auth/login', {
		type: goalType,
        title: title,
        content: desc,
        priority: goalPriority,
        endsAt: date
	}).then((res) => {
        return res.data;
	});
}