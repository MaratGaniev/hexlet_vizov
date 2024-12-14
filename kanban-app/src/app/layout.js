'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import './globals.css';

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<Provider store={store}>
					<header>
						<h1>Канбан-доска</h1>
					</header>
					<main>{children}</main>
				</Provider>
			</body>
		</html>
	);
}
