import type { Status, Task } from '../types/Task.ts';

export const getTasksByStatus = (tasks: Task[], status: Status) => {
	return tasks.filter((task) => task.status === status);
};

export const getTaskById = (tasks: Task[], id: string) => {
	return tasks.find((task) => task.id === id);
};
