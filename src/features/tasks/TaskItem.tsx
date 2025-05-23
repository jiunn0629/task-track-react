import type { Task } from '../../types/Task.ts';

type TaskItemProps = {
	task: Task;
};

const getPriorityColor = (priority?: Task['priority']) => {
	switch (priority) {
		case 'high':
			return 'bg-red-500';
		case 'medium':
			return 'bg-yellow-500';
		case 'low':
			return 'bg-blue-500';
		default:
			return 'bg-gray-500';
	}
};

const TaskItem = ({ task }: TaskItemProps) => {
	return (
		<div className='card w-full bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-200 border border-base-300'>
			<div className='card-body p-4'>
				<div className='flex items-start justify-between gap-2'>
					<h2 className='card-title text-base font-medium'>{task.title}</h2>
					<div
						className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}
					/>
				</div>

				<div className='flex flex-wrap gap-2 mt-2'>
					{task.project && (
						<div className='badge badge-sm badge-outline'>{task.project}</div>
					)}
				</div>

				<div className='mt-2 text-sm text-gray-500'>
					<div className='flex items-center gap-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
						{task.dueDate}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskItem;
