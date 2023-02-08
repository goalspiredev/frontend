import isloggedin from './auth/isloggedin';
import login from './auth/login';
import register from './auth/register';
import verifyUser from './auth/verifyuser';
import createGoal from './goal/create';
import getGoals from './goal/list';
import getGoal from './goal/get';
import editGoal from './goal/edit';

interface goalspire {
	isLoggedIn(): Promise<boolean>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	login(email: string, password: string, remember: boolean): Promise<any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register(
		username: string,
		email: string,
		password: string,
		confirmPassword: string,
		terms: boolean,
		service: boolean
	): Promise<any>;
	verifyUser(code: string, email: string): Promise<boolean>;
	createGoal(title: string, type: string, priority: string, date: Date, desc: string): Promise<void>;
	getGoals(): Promise<any>;
	getGoal(id: string): Promise<any>;
	editGoal(id: string, title: string, type: string, priority: string, date: Date, desc: string, completed: boolean): Promise<void>;
}

class goalspire implements goalspire {
	async isLoggedIn() {
		return await isloggedin();
	}

	async login(email: string, password: string, remember: boolean) {
		return await login(email, password, remember);
	}

	async register(
		username: string,
		email: string,
		password: string,
		confirmPassword: string,
		terms: boolean,
		service: boolean
	) {
		return await register(username, email, password, confirmPassword, terms, service);
	}

	async verifyUser(code: string, email: string) {
		return await verifyUser(code, email);
	}

	async createGoal(title: string, type: string, priority: string, date: Date, desc: string): Promise<void> {
		return await createGoal(title, type, priority, date, desc);
	}

	async getGoals(): Promise<any> {
		return await getGoals();
	}

	async getGoal(id: string): Promise<any> {
		return await getGoal(id);
	}

	async editGoal(id: string, title: string, type: string, priority: string, date: Date, desc: string, completed: boolean): Promise<void> {
		return await editGoal(id, title, type, priority, date, desc, completed);
	}

	static instance: goalspire;

	static getInstance() {
		if (!this.instance) {
			this.instance = new goalspire();
		}

		return this.instance;
	}
}

export const useGoalspire: goalspire = goalspire.getInstance();
