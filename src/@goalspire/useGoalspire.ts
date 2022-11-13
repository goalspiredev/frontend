import { User, Tasks } from './types';
import { useAuth } from './useAuth';
import { useStore } from './useStore';

const { setUser, getUser, removeToken, removeUser, removeTasks } = useStore();
const { isSignedIn } = useAuth();

export declare function useGoalspire(): UseGoalspire;

interface UseGoalspire {
	getMe(): Promise<User>;
	updateMe(): Promise<void>;
	deleteMe(): Promise<void>;
}

class UseGoalspire implements UseGoalspire {
	async getMe(): Promise<User> {
		if (!isSignedIn()) return new User();
		if (getUser().id !== null) return getUser();

		// TODO: Get user data
		setUser(new User());
		return new User();
	}

	async updateMe(): Promise<void> {
		if (!isSignedIn()) return;

		// TODO: Update user data
	}

	async deleteMe(): Promise<void> {
		// TODO: Delete user data

		(await this.getMe()).delete();
		
		removeToken();
		removeUser();
		removeTasks();
	}
}