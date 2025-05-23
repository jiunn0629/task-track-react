export type Status = 'backlog' | 'in progress' | 'done';

export const BOARD_SECTIONS = {
	backlog: 'backlog',
	'in progress': 'in progress',
	done: 'done',
};

export const INITIAL_TASKS: Task[] = [
	{
		id: 'task-001',
		summary: 'Setup project repository',
		description: 'Setup project repository',
		status: 'backlog',
		estimateTime: 10,
		priority: 'medium',
		taskType: 'feature',
		project: 'Lookr3',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-002',
		summary: 'Implement user login',
		description: 'Implement user login',
		status: 'in progress',
		estimateTime: 10,
		taskType: 'feature',
		priority: 'high',
		project: 'Lookr3',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-003',
		summary: 'Design landing page',
		description: 'Design landing page',
		status: 'backlog',
		estimateTime: 3,
		taskType: 'bug',
		priority: 'low',
		project: 'tico run',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-004',
		summary: 'Fix API rate limit bug',
		description: 'Fix API rate limit bug',
		status: 'in progress',
		estimateTime: 3,
		priority: 'high',
		taskType: 'bug',
		project: 'Backend Services',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
	{
		id: 'task-005',
		summary: 'Release version 1.0',
		description: 'Release version 1.0',
		status: 'done',
		estimateTime: 10,
		taskType: 'release',
		project: 'datar',
		priority: 'low',
		relateTask: [],
		childTask: [],
		parentTask: null,
	},
];

export type Task = {
	id: string;
	summary: string;
	description: string;
	// 目前進度
	status: string;
	// 專案
	project: string;
	// 預估時間
	estimateTime: number;
	taskType: 'bug' | 'feature' | 'wording' | 'update' | 'release';
	priority: 'low' | 'medium' | 'high';
	relateTask: RelateTask[];
	childTask: RelateTask[];
	parentTask: RelateTask | null;
};

export type RelateTask = {
	id: string;
	summary: string;
};

export type BoardSectionsType = {
	[name: string]: Task[];
};
