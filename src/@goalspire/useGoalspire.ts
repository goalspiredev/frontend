import isloggedin from './auth/isloggedin';
import login from './auth/login';
import register from './auth/register';

interface goalspire {
	isLoggedIn(): Promise<boolean>;
	login(email: string, password: string, remember: boolean): Promise<any>;
	register(
		username: string,
		email: string,
		password: string,
		confirmPassword: string,
		terms: boolean,
		service: boolean
	): Promise<any>;
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

	static instance: goalspire;

	static getInstance() {
		if (!this.instance) {
			this.instance = new goalspire();
		}

		return this.instance;
	}
}

export const useGoalspire: goalspire = goalspire.getInstance();