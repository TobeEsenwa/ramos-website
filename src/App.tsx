import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Header from './components/Header';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted/index';
import ControlSection from './components/ControlSection/index';
import DataSection from './components/DataSection/index';
import MaximizeEfficiency from './components/MaximizeEfficiency/index';
import MainSection from './components/MainSection/index';
import AnalyticsSection from './components/AnalyticsSection/index';

gsap.registerPlugin(ScrollToPlugin);

const App: React.FC = () => {
	useEffect(() => {
		const links = document.querySelectorAll("a[href^='#']");

		links.forEach(link => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				const target = document.querySelector((link as HTMLAnchorElement).getAttribute("href") as string);

				if (target) {
					gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 70 } });
				}
			});
		});
	}, []);

	return (
		<main className="mx-auto overflow-hidden">
			<Header />
			<MainSection />
			<AnalyticsSection />
			<MaximizeEfficiency />
			<DataSection />
			<ControlSection />
			<GetStarted />
			<Footer />
		</main>
	);
};

export default App;
