import { User } from './types';
import { useStore } from './useStore';

const { setToken, setUser, getToken, removeToken, removeUser, removeTasks } = useStore();

export declare function useAuth(): UseAuth;

interface UseAuth {
	getToken(): string;
	setToken(token: string): void;
	login(email: string, password: string): Promise<void>;
	logout(): Promise<void>;
	isSignedIn(): boolean;
    register(): Promise<void>;
}

class UseAuth implements UseAuth {
	getToken(): string {
		return getToken();
	}

	setToken(token: string): void {
		setToken(token);
	}

	async login(email: string, password: string): Promise<void> {
		// TODO: Login user
        setToken('');
		setUser(new User());
	}

	async logout(): Promise<void> {
		removeToken();
        removeUser();
        removeTasks();
	}

	isSignedIn(): boolean {
		return !!this.getToken();
	}

    async register(): Promise<void> {
        // TODO: Register user
        setToken('');
        setUser(new User());
    }
}