/**
 * Landing Page
 * - Loads all the required components
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import VideoComponent from '../components/VideoComponent';
import CodeComponent from '../components/CodeComponent';
import GraphicComponent from '../components/GraphicComponent';
// import Features from '../components/Features'; 
import Features2 from '../components/Features2';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* Exports -------------------------------------------------------------------*/

export default function LandingPage() {
	return (
		<div>
			<Nav />
			<VideoComponent />
			<Features2 />
			<GraphicComponent />
			<CodeComponent />
			<Footer />
		</div>
	);
}
