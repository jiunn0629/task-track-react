export type Status = 'backlog' | 'in progress' | 'done';

export const BOARD_SECTIONS = {
	backlog: 'backlog',
	'in progress': 'in progress',
	done: 'done',
};

export const INITIAL_TASKS: Task[] = [
	{
		id: 'task-001',
		title: 'Setup project repository',
		description: 'Setup project repository',
		status: 'backlog',
		dueDate: '2025-05-20',
		priority: 'medium',
		project: 'Lookr3',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-002',
		title: 'Implement user login',
		description: 'Implement user login',
		status: 'in progress',
		dueDate: '2025-05-22',
		priority: 'high',
		project: 'Lookr3',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-003',
		title: 'Design landing page',
		description: 'Design landing page',
		status: 'backlog',
		dueDate: '2025-05-25',
		priority: 'low',
		project: 'tico run',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-004',
		title: 'Fix API rate limit bug',
		description: 'Fix API rate limit bug',
		status: 'in progress',
		dueDate: '2025-05-18',
		priority: 'high',
		project: 'Backend Services',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-005',
		title: 'Release version 1.0',
		description: 'Release version 1.0',
		status: 'done',
		dueDate: '2025-05-10',
		project: 'datar',
		priority: 'low',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
];

export type Task = {
	id: string;
	title: string;
	description: string;
	status: 'backlog' | 'in progress' | 'done';
	project: string;
	dueDate: string;
	priority: 'low' | 'medium' | 'high';
	relateTask: RelateTask[];
	childTask: RelateTask[];
	parentTask: RelateTask | null;
};

export type RelateTask = {
	id: string;
	title: string;
};

export type BoardSectionsType = {
	[name: string]: Task[];
};
