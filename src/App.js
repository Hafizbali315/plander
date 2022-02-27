import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UserLandingPage from './containers/UserLandingPage'
import HostLandingPage from './containers/HostLandingPage'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<UserLandingPage />}>
						<Route path="user" element={<UserLandingPage />} />
					</Route>

					<Route path="/host" element={<HostLandingPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
