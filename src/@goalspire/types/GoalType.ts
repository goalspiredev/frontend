export type GoalType = {
	id: string;
	title: string;
	content: string;
	isCompleted: boolean;
	endsAt: string;
	tags?: string[];
	priority?: string;
	type?: string;
};
