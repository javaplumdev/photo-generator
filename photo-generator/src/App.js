import { Routes, Route } from 'react-router-dom';
import ContextProvider from './context/Context';

import NavbarComponent from './components/NavbarComponent';
import PhotoContainer from './components/PhotoContainer';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<NavbarComponent />
								<PhotoContainer />
							</>
						}
					/>
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
