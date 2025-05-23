import { createContext, useContext, useState, type ComponentType } from 'react';

type PopupOptions = {
	component: ComponentType<unknown>;
	props?: Record<string, unknown>;
};

const PopupContext = createContext<{
	open: (options: PopupOptions) => void;
	close: () => void;
} | null>(null);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
	const [popupOptions, setPopupOptions] = useState<PopupOptions | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const RenderedComponent = popupOptions?.component;
	const componentProps = popupOptions?.props ?? {};
	const title = componentProps.title as string | undefined;
	const className = componentProps.className as string | undefined;

	const open = (options: PopupOptions) => {
		setPopupOptions(options);
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
	};

	return (
		<PopupContext.Provider value={{ open: open, close: close }}>
			{children}
			<dialog
				id='global_modal'
				className={`modal ${isOpen ? 'modal-open' : ''}`}
			>
				<div className={`modal-box relative ${className ?? ''}`}>
					<form method='dialog'>
						<button
							className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
							onClick={close}
						>
							✕
						</button>
					</form>

					{title && <h3 className='font-bold text-lg mb-4'>{title}</h3>}

					{RenderedComponent && <RenderedComponent {...popupOptions?.props} />}
				</div>
			</dialog>
		</PopupContext.Provider>
	);
};

export const usePopup = () => {
	const ctx = useContext(PopupContext);
	if (!ctx) throw new Error('useModal 必須在 ModalProvider 中使用');
	return ctx;
};
