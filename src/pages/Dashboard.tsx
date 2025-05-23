import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import WeeklyStats from '../components/WeeklyStats';
import DailyLogSummary from '../components/DailyLogSummary';
import type { Task } from '../types/Task.ts';
import type { DailyLog } from '../types/DailyLog';

const getToday = () => new Date().toISOString().slice(0, 10);

const Dashboard: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [dailyLog, setDailyLog] = useState<DailyLog | undefined>();

	// 取得今日任務與日誌
	useEffect(() => {
		const allTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
		const today = getToday();
		setTasks(allTasks.filter((t) => t.dueDate === today));
		const logs: DailyLog[] = JSON.parse(
			localStorage.getItem('dailyLogs') || '[]'
		);
		setDailyLog(logs.find((l) => l.date === today));
	}, []);

	// 狀態切換
	const handleStatusChange = (id: string, status: Task['status']) => {
		const allTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
		const idx = allTasks.findIndex((t) => t.id === id);
		if (idx === -1) return;
		allTasks[idx].status = status;
		localStorage.setItem('tasks', JSON.stringify(allTasks));
		setTasks(allTasks.filter((t) => t.dueDate === getToday()));
	};

	// 編輯、刪除（僅示意，實際可跳轉或彈窗）
	const handleEdit = (id: string) => {
		alert('編輯功能尚未實作，任務ID: ' + id);
	};
	const handleDelete = (id: string) => {
		if (!window.confirm('確定要刪除這個任務嗎？')) return;
		const allTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
		const newTasks = allTasks.filter((t) => t.id !== id);
		localStorage.setItem('tasks', JSON.stringify(newTasks));
		setTasks(newTasks.filter((t) => t.dueDate === getToday()));
	};

	return (
		<div className='bg-base-200 min-h-screen flex flex-col items-center'>
			<main className='flex-1 w-full flex flex-col items-center py-8 px-2 sm:px-0'>
				<div className='w-full max-w-2xl space-y-6'>
					<div className='bg-base-100 shadow-lg rounded-xl p-6'>
						<h1 className='text-2xl font-bold mb-4 text-primary'>今日任務</h1>
						<TaskList
							tasks={tasks}
							onStatusChange={handleStatusChange}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					</div>
					<WeeklyStats tasks={tasks} />
					<DailyLogSummary dailyLog={dailyLog} />
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
