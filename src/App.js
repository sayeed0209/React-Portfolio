import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<Aboutpage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
