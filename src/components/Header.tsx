import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BrandIcon from './ImageComponents/BrandIcon';

const Header: React.FC = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const navRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const brandRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const headerElement = headerRef.current;
		const navElement = navRef.current;
		const buttonElement = buttonRef.current;
		const brandElement = brandRef.current;

		if (headerElement && navElement && buttonElement && brandElement) {
			gsap.set([navElement, buttonElement, brandElement], { y: 50, opacity: 0 });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.timeline()
								.to(navElement, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
								.to([brandElement, buttonElement], { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2 }, "-=0.5");
						} else {
							gsap.set([navElement, buttonElement, brandElement], { y: 20, opacity: 0 });
						}
					});
				},
				{ threshold: 0.1 }
			);

			observer.observe(headerElement);

			return () => {
				observer.unobserve(headerElement);
			};
		}
	}, []);

	return (
		<header ref={headerRef} className="bg-[--primary-color] text-white rounded-2xl p-2 mx-3 mt-3 overflow-hidden flex justify-between items-center shadow-md">
			<div ref={brandRef} className="flex items-center flex-row">
				<BrandIcon />
				<span className="text-xl ml-3 font-bold">ramos</span>
			</div>
			<nav ref={navRef} className="bg-[#252525] rounded-[1.3em] h-full p-4 flex gap-10 space-x-4">
				<a href="#dashboard" className="text-xs text-white hover:text-[--secondary-color] transition-colors duration-300">Dashboard</a>
				<a href="#reports" className="text-xs text-white hover:text-[--secondary-color] transition-colors duration-300">Reports</a>
				<a href="#documents" className="text-xs text-white hover:text-[--secondary-color] transition-colors duration-300">Documents</a>
				<a href="#history" className="text-xs text-white hover:text-[--secondary-color] transition-colors duration-300">History</a>
				<a href="#settings" className="text-xs text-white hover:text-[--secondary-color] transition-colors duration-300">Settings</a>
			</nav>
			<button ref={buttonRef} className="bg-[--background-color] h-full rounded-xl text-[--primary-color] text-sm py-3 px-6 hover:bg-[--secondary-color] transition-colors duration-300">
				Sign Up
			</button>
		</header>
	);
};

export default Header;
