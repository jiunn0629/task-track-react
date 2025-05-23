import Layout from './components/layout/Layout.tsx';
import { PopupProvider } from './context/PopupContext.tsx';

export default function App() {
	return (
		<PopupProvider>
			<Layout />
		</PopupProvider>
	);
}
