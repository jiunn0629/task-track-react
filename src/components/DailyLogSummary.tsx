import React from 'react'
import type { DailyLog } from '../types/DailyLog'

type DailyLogSummaryProps = {
  dailyLog?: DailyLog
}

const DailyLogSummary: React.FC<DailyLogSummaryProps> = ({ dailyLog }) => {
  return (
    <div className="bg-base-100 shadow-lg rounded-xl p-6 w-full mt-2">
      <h2 className="font-bold text-lg mb-4 text-primary">今日工作日誌</h2>
      {dailyLog ? (
        <div className="prose max-w-none text-base-content">
          {dailyLog.content.length > 100
            ? dailyLog.content.slice(0, 100) + '...'
            : dailyLog.content}
        </div>
      ) : (
        <div className="italic text-base-content/60 text-center py-4">尚未撰寫今日日誌</div>
      )}
    </div>
  )
}

export default DailyLogSummary 