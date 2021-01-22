import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route
					exact
					path="/"
					render={() => (
						<MainLayout>
							<Homepage />
						</MainLayout>
					)}
				/>
				<Route
					path="/registration"
					render={() => (
						<MainLayout>
							<Registration />
						</MainLayout>
					)}
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
