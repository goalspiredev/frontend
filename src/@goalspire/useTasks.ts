import { Tasks, Task } from './types';
import { useStore } from './useStore';

export declare function useTasks(): UseTasks;

interface UseTasks {
	getTasks(): Promise<Tasks>;
    setTasks(): void;
    createTask(task: Task): Promise<void>;
    updateTask(task: Task): Promise<void>;
    deleteTask(task: Task): Promise<void>;
    completeTask(task: Task): Promise<void>;
    deleteAllTasks(): Promise<void>;
    createSubTask(task: Task, subTask: Task): Promise<void>;
    updateSubTask(task: Task, subTask: Task): Promise<void>;
    deleteSubTask(task: Task, subTask: Task): Promise<void>;
    completeSubTask(task: Task, subTask: Task): Promise<void>;
}

class UseTasks implements UseTasks {
	async getTasks(): Promise<Tasks> {
		if (useStore().getTasks().tasks !== null) return useStore().getTasks();
		// TODO: Get tasks from database
		useStore().setTasks(new Tasks());
		return new Tasks();
	}

    setTasks(): void {
        // TODO: Set tasks to database
        useStore().setTasks(new Tasks());
    }

    async createTask(task: Task): Promise<void> {
        // TODO: Create task
    }

    async updateTask(task: Task): Promise<void> {
        // TODO: Update task
    }

    async deleteTask(task: Task): Promise<void> {
        // TODO: Delete task
    }

    async completeTask(task: Task): Promise<void> {
        // TODO: Complete task
    }

    async deleteAllTasks(): Promise<void> {
        // TODO: Delete all tasks
    }

    async createSubTask(task: Task, subTask: Task): Promise<void> {
        // TODO: Create sub task
    }

    async updateSubTask(task: Task, subTask: Task): Promise<void> {
        // TODO: Update sub task
    }

    async deleteSubTask(task: Task, subTask: Task): Promise<void> {
        // TODO: Delete sub task
    }
}