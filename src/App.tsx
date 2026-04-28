import Navbar from './components/Navbar'; //  import navbar compnent
import Home from './pages/Home'; // import home page component
import SoftBackdrop from './components/SoftBackdrop'; // import softbackup comp.
import Footer from './components/Footer'; // import footer
import LenisScroll from './components/lenis'; // import lenis scroll component, which provides smooth scrolling behavior for the entire application
import { Route, Routes } from 'react-router-dom'; // import route  and routes from react-router-dom
import Generator from './pages/Generator';
import Plans from './pages/Plans';
import Community from './pages/Community';
import Result from './pages/Result';
import MyGenerations from './pages/MyGenerations';
import Loading from './pages/Loading';

function App() {
	return (
		<>
			<SoftBackdrop /> // add the SoftBackdrop component to the app, which provides a blurred background effect for the entire application
			<LenisScroll />// add the LenisScroll component to the app, which provides smooth scrolling behavior for the entire application
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/generator" element={<Generator />} />
				<Route path="/plans" element={<Plans />} />
				<Route path="/community" element={<Community />} />
				<Route path="/result/:projectId" element={<Result />} />
				<Route path="/my-generations" element={<MyGenerations />} />
				<Route path="/loading" element={<Loading />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;