import React from 'react'

type AddTaskButtonProps = {
  onClick: () => void
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button
      className="btn btn-primary btn-circle fixed bottom-8 right-8 shadow-xl z-50 hover:scale-110 active:scale-95 transition-transform duration-200"
      aria-label="新增任務"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
    >
      <span className="text-2xl">＋</span>
    </button>
  )
}

export default AddTaskButton 