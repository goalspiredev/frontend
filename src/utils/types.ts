export type ColorName = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'white' | 'transparent';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Task {
  id: string;
  completed: boolean;
  title: string;
  tags: string[];
  createdAt: Date;
  dueDate: Date;
  priority: number;
  description: string;
  subTasks: SubTask[];
}

interface SubTask {
  id: string;
  completed: boolean;
  title: string;
}