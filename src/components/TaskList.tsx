import React from 'react'
import type { Task } from '../types/Task.ts'

type TaskListProps = {
  tasks: Task[]
  onStatusChange: (id: string, status: Task['status']) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const statusBadgeClass = (status: Task['status']) => {
  if (status === 'done') return 'badge-success'
  if (status === 'inProgress') return 'badge-warning'
  return 'badge-neutral'
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onEdit, onDelete }) => {
  return (
    <div className="w-full">
      {tasks.length === 0 ? (
        <div className="text-base-content/60 italic text-center py-6">今日尚無任務</div>
      ) : (
        <ul className="divide-y divide-base-200">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between py-3 px-2 rounded-lg transition hover:bg-base-300 group"
            >
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-base-content truncate">{task.title}</span>
                <span className={`ml-2 badge badge-sm ${statusBadgeClass(task.status)}`}>{task.status === 'todo' ? '待辦' : task.status === 'inProgress' ? '進行中' : '已完成'}</span>
              </div>
              <div className="flex gap-2 opacity-80 group-hover:opacity-100">
                <button
                  className="btn btn-xs btn-success"
                  aria-label="切換狀態"
                  tabIndex={0}
                  onClick={() => onStatusChange(task.id, task.status === 'done' ? 'todo' : 'done')}
                >
                  {task.status === 'done' ? '復原' : '完成'}
                </button>
                <button
                  className="btn btn-xs btn-info"
                  aria-label="編輯任務"
                  tabIndex={0}
                  onClick={() => onEdit(task.id)}
                >
                  編輯
                </button>
                <button
                  className="btn btn-xs btn-error"
                  aria-label="刪除任務"
                  tabIndex={0}
                  onClick={() => onDelete(task.id)}
                >
                  刪除
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList 