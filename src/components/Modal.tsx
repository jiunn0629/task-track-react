import type { ReactNode } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* 背景遮罩 */}
			<div
				className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
				onClick={onClose}
			/>

			{/* 彈窗內容 */}
			<div className='relative bg-base-100 rounded-lg shadow-xl w-full max-w-md mx-4'>
				{/* 標題欄 */}
				<div className='flex items-center justify-between p-4 border-b border-base-300'>
					<h3 className='text-lg font-semibold'>{title}</h3>
					<button onClick={onClose} className='btn btn-ghost btn-sm btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>

				{/* 內容區域 */}
				<div className='p-4'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
