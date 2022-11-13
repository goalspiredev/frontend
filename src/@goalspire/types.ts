import moment from 'moment';
import { useStore } from './useStore';

export type ColorName = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'white' | 'transparent';

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
		this._patch(data);
		// TODO: Update user in database
	}

	async delete() {
		// TODO: Delete user from database
	}
}

export class Tasks {
	constructor(tasks: Task[] = []) {
		this.tasks = tasks;
	}
	tasks: Task[];

	async add(task: Task) {
		// TODO: Add task to database
		this.tasks.push(task);
	}

	async deleteAll() {
		// TODO: Delete all tasks from database
	}
}

export class Task {
	constructor(
		id: string,
		title: string,
		completed: boolean,
		tags: string[],
		createdAt: Date,
		dueDate: Date,
		priority: number,
		description: string,
		subTasks: SubTask[]
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
	subTasks: SubTask[];

	_patch(data: { title?: string; completed?: boolean; tags?: string[]; dueDate?: TaskDate; priority?: number; description?: string } = {}) {
		if ('title' in data) this.title = data.title ?? this.title;
		if ('completed' in data) this.completed = data.completed ?? this.completed;
		if ('tags' in data) this.tags = data.tags ?? this.tags;
		if ('dueDate' in data) this.dueDate = data.dueDate ?? this.dueDate;
		if ('priority' in data) this.priority = data.priority ?? this.priority;
		if ('description' in data) this.description = data.description ?? this.description;
	}

	async addSubTask(subTask: SubTask) {
		// TODO: Add subtask to database
		this.subTasks.push(subTask);
	}

	async update(data: { title?: string; completed?: boolean; tags?: string[]; dueDate?: TaskDate; priority?: number; description?: string } = {}) {
		this._patch(data);
		// TODO: Update task in database
	}

	async delete() {
		// TODO: Delete tasks from database
	}
}

export class SubTask {
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
		this._patch(data);
		// TODO: Update sub task in database
	}

	async delete() {
		// TODO: Delete sub task from database
	}
}

export class TaskDate {
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

export class Settings {
	constructor(goalVisibility: boolean = true, reducedAnimations: boolean = false) {
		this.goalVisibility = goalVisibility;
		this.reducedAnimations = reducedAnimations;
	}
	goalVisibility: boolean;
	reducedAnimations: boolean;

	_patch(data: { goalVisibility?: boolean; reducedAnimations?: boolean; } = {}) {
		if ('goalVisibility' in data) this.goalVisibility = data.goalVisibility ?? this.goalVisibility;
		if ('reducedAnimations' in data) this.reducedAnimations = data.reducedAnimations ?? this.reducedAnimations;
		useStore().setSettings(this);
	}

	async update(data: { goalVisibility?: boolean; reducedAnimations?: boolean; } = {}) {
		this._patch(data);
	}
}