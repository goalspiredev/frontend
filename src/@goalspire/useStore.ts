import type { User, Tasks, Settings } from './types';

export declare function useStore(): UseStore;

interface UseStore {
    setToken(token: string): void;
    setUser(user: User): void;
    setTasks(tasks: Tasks): void;
    setSettings(settings: Settings): void;
    getToken(): string;
    getUser(): User;
    getTasks(): Tasks;
    getSettings(): Settings;
    removeToken(): void;
    removeUser(): void;
    removeTasks(): void;
    removeSettings(): void;
}

class UseStore implements UseStore {
    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    setUser(user: User): void {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    setSettings(settings: Settings): void {
        localStorage.setItem('settings', JSON.stringify(settings));
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

    getSettings(): Settings {
        return JSON.parse(localStorage.getItem('settings') || '{}');
    }

    removeToken(): void {
        localStorage.removeItem('token');
    }

    removeUser(): void {
        sessionStorage.removeItem('user');
    }

    removeTasks(): void {
        sessionStorage.removeItem('tasks');
    }

    removeSettings(): void {
        localStorage.removeItem('settings');
    }
}