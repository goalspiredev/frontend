import type { User, Tasks } from './useGoalspire';

export declare function useStore(): Store;

interface Store {
    setToken(token: string): void;
    setUser(user: User): void;
    setTasks(tasks: Tasks): void;
    getToken(): string;
    getUser(): User;
    getTasks(): Tasks;
}

class Store implements Store {
    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    setUser(user: User): void {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUser(): User {
        return JSON.parse(sessionStorage.getItem('user') || '{}');
    }

    setTasks(tasks: Tasks): void {
        sessionStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks(): Tasks {
        return JSON.parse(sessionStorage.getItem('tasks') || '{}');
    }
}