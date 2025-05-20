import React from 'react'
import type { Task } from '../types/Task.ts'

type WeeklyStatsProps = {
  tasks: Task[]
}

const WeeklyStats: React.FC<WeeklyStatsProps> = ({ tasks }) => {
  // 計算本週完成任務數
  const doneTasks = tasks.filter((t) => t.status === 'done')
  const totalTasks = tasks.length
  const doneCount = doneTasks.length

  // 圓環圖百分比
  const percent = totalTasks === 0 ? 0 : Math.round((doneCount / totalTasks) * 100)

  return (
    <div className="bg-base-100 shadow-lg rounded-xl p-6 w-full">
      <h2 className="font-bold text-lg mb-4 text-primary">本週任務統計</h2>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex justify-center items-center w-full sm:w-auto">
          <div className="radial-progress text-primary" style={{
            '--value': percent,
            '--size': '4rem',
            '--thickness': '8px',
          } as React.CSSProperties} aria-label="本週完成率">
            {percent}%
          </div>
        </div>
        <div className="flex flex-col gap-1 text-base-content font-semibold">
          <div>總任務：<span className="text-info">{totalTasks}</span></div>
          <div>已完成：<span className="text-success">{doneCount}</span></div>
          <div>未完成：<span className="text-error">{totalTasks - doneCount}</span></div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyStats 