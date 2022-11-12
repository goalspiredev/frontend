import type { User, Task } from './Types';

// USER
export function getUser(): User {
	return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user') || '') : null;
}
export function setUser(user: User): void {
	sessionStorage.setItem('user', JSON.stringify(user));
}
export function removeUser(): void {
	sessionStorage.removeItem('user');
}

// TOKEN
export function getToken(): string {
	return localStorage.getItem('token') || '';
}
export function setToken(token: string): void {
	localStorage.setItem('token', token);
}
export function removeToken(): void {
	localStorage.removeItem('token');
}

// TASKS
export function getTasks(): Task[] {
	return sessionStorage.getItem('tasks') ? JSON.parse(sessionStorage.getItem('tasks') || '') : null;
}
export function setTasks(tasks: Task[]): void {
	sessionStorage.setItem('tasks', JSON.stringify(tasks));
}
export function removeTasks(): void {
	sessionStorage.removeItem('tasks');
}
