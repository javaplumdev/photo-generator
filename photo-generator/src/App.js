import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContextProvider from './context/Context';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
