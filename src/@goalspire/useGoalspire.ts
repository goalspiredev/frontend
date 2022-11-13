import moment from 'moment';
import { useStore } from './store';

const { setToken, setUser, setTasks, getToken, getUser, getTasks } = useStore();

export declare function useGoalspire(): UseGoalspire;

interface UseGoalspire {
	getToken(): string;
	setToken(token: string): void;
	login(email: string, password: string): Promise<void>;
	logout(): Promise<void>;
	isSignedIn(): boolean;
	getMe(): User;
	getTasks(): Promise<Tasks>;
}

class UseGoalspire implements UseGoalspire {
	getToken(): string {
		return getToken();
	}

	setToken(token: string): void {
		setToken(token);
	}

	async login(email: string, password: string): Promise<void> {
		// TO DO: Login user
		setUser(new User());
	}

	async logout(): Promise<void> {
		// TO DO: Logout user
	}

	isSignedIn(): boolean {
		return !!this.getToken();
	}

	getMe(): User {
		if (!this.isSignedIn()) return new User();
		if (getUser().id !== null) return getUser();

		// TO DO: Get user data
		setUser(new User());
		return new User();
	}

	async getTasks(): Promise<Tasks> {
		if (getTasks().tasks !== null) return getTasks();
		// TO DO: Get tasks from database
		setTasks(new Tasks());
		return new Tasks();
	}
}

export class User {
	constructor(id: string = '', firstName: string = '', lastName: string = '', email: string = '', subscribed: boolean = false, tasks: Tasks = new Tasks()) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.subscription = subscribed;
		this.tasks = tasks;
	}
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	subscription: boolean;
	tasks: Tasks;

	_patch(data: { firstName?: string; lastName?: string; email?: string; } = {}) {
		if ('firstName' in data) this.firstName = data.firstName ?? this.firstName;
		if ('lastName' in data) this.lastName = data.lastName ?? this.lastName;
		if ('email' in data) this.email = data.email ?? this.email;
	}

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	async update(data: { firstName?: string; lastName?: string; email?: string; } = {}) {
		// TO DO: Update user in database
		this._patch(data);
	}

	async delete() {
		// TO DO: Delete user from database
	}
}

export class Tasks {
	constructor(tasks: Task[] = []) {
		this.tasks = tasks;
	}
	tasks: Task[];

	async add(task: Task) {
		// TO DO: Add task to database
	}

	async deleteAll() {
		// TO DO: Delete all tasks from database
	}
}

class Task {
	constructor(
		id: string,
		title: string,
		completed: boolean,
		tags: string[],
		createdAt: Date,
		dueDate: Date,
		priority: number,
		description: string,
		subTasks: SubTasks
	) {
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.tags = tags;
		this.createdAt = new TaskDate(createdAt);
		this.dueDate = new TaskDate(dueDate);
		this.priority = priority;
		this.description = description;
		this.subTasks = subTasks;
	}
	id: string;
	title: string;
	completed: boolean;
	tags: string[];
	createdAt: TaskDate;
	dueDate: TaskDate;
	priority: number;
	description: string;
	subTasks: SubTasks;

	async update() {
		// TO DO: Update task in database
	}

	async delete() {
		// TO DO: Delete tasks from database
	}
}

class SubTasks {
	constructor(subTasks: SubTask[]) {
		this.subTasks = subTasks;
	}
	subTasks: SubTask[];

	async add(subTask: SubTask) {
		// TO DO: Add subTask to database
	}

	async deleteAll() {
		// TO DO: Delete all subTasks from database
	}
}

class SubTask {
	constructor(id: string, title: string, completed: boolean) {
		this.id = id;
		this.title = title;
		this.completed = completed;
	}
	id: string;
	title: string;
	completed: boolean;

	_patch(data: { title?: string; completed?: boolean; } = {}) {
		if ('title' in data) this.title = data.title ?? this.title;
		if ('completed' in data) this.completed = data.completed ?? this.completed;
	}

	async update(data: { title?: string; completed?: boolean; } = {}) {
		// TO DO: Update sub task in database
		this._patch(data);
	}

	async delete() {
		// TO DO: Delete sub task from database
	}
}

class TaskDate {
	constructor(date: Date) {
		this.date = date;
	}
	date: Date;

	formatFullDate() {
		return moment(this.date).format('MMMM Do YYYY, h:mm:ss a');
	}

	formatDate() {
		return moment(this.date).format('MMM Do YYYY');
	}

	formatTime() {
		return moment(this.date).format('h:mm:ss a');
	}

	fromNowDate() {
		return moment(this.date, 'MMM Do YYYY').fromNow();
	}

	fromNowFullDate() {
		return moment(this.date, 'MMMM Do YYYY, h:mm:ss a').fromNow();
	}

	fromNowTime() {
		return moment(this.date, 'h:mm:ss a').fromNow();
	}
}
