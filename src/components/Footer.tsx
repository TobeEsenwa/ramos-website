import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import QrCode from './ImageComponents/QrCode';
import { StaggeringAnimatedText } from '../assets/misc/StaggeringAnimatedText';

const Footer: React.FC = () => {
	const footerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const footerElement = footerRef.current;
		const sections = footerElement?.querySelectorAll('.animate-scale-section');

		if (footerElement && sections) {
			gsap.set(sections, { y: 10, scaleY: 0, transformOrigin: 'bottom' });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to(entry.target, {
								scaleY: 1,
								duration: 1,
								ease: 'power3.out',
								stagger: 0.2,
							});
						} else {
							gsap.set(entry.target, { scaleY: 0 });
						}
					});
				},
				{ threshold: 0.1 }
			);

			sections.forEach((section) => observer.observe(section));

			return () => {
				sections.forEach((section) => observer.unobserve(section));
			};
		}
	}, []);

	return (
		<footer ref={footerRef} className="bg-[--primary-color] text-white flex px-4 pb-10 flex-col justify-between">
			<div className="container px-4 pt-8 mx-auto animate-scale-section">
				<div className="flex flex-col md:flex-row items-center mb-14 mt-16 justify-between">
					<div className="mb-4 md:mb-0 animate-scale">
						<ul className="flex text-[#a2a2a2] gap-4 text-md space-x-4">
							<li><a href="#about" className="hover:underline">About</a></li>
							<li><a href="#whyus" className="hover:underline">Why Us</a></li>
							<li><a href="#platform" className="hover:underline">Platform</a></li>
							<li><a href="#pricing" className="hover:underline">Pricing</a></li>
							<li><a href="#contacts" className="hover:underline">Contacts</a></li>
						</ul>
					</div>
					<div className="mb-4 md:mb-0 text-center md:text-left animate-scale">
						<p className="text-5xl">hello@ramos.com</p>
					</div>
				</div>
				<hr className="border-t-1 border-[#a2a2a2] opacity-[0.5] my-4 animate-scale" />
			</div>

			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between mt-8 animate-scale-section">
				<div className="flex gap-14 animate-scale">
					<div className="text-center md:text-left">
						<h2 className="text-lg">Warrensville Heights</h2>
						<p className="text-[#a2a2a2] text-sm">14418 Vineyard Drive, NC</p>
						<p className="text-[#a2a2a2] text-sm">44128</p>
					</div>
					<div className="text-center md:text-left">
						<h2 className="text-lg">Saint Louis</h2>
						<p className="text-[#a2a2a2] text-sm">1366 Penn Street</p>
						<p className="text-[#a2a2a2] text-sm">63101</p>
					</div>
				</div>

				<div className="text-center text-lg md:text-right text-[#a2a2a2] flex gap-2 flex-col items-start justify-center animate-scale">
					<a href="https://www.linkedin.com" className="hover:underline mb-2">Linkedin</a>
					<a href="https://www.instagram.com" className="hover:underline mb-2">Instagram</a>
					<a href="https://www.facebook.com" className="hover:underline">Facebook</a>
				</div>
			</div>

			<div className="container mx-auto p-4 flex justify-items-center items-center justify-between mt-8 animate-scale-section">
				<div className="text-center md:text-left">
					<StaggeringAnimatedText text="Ramos®" className="text-9xl" />
				</div>
				<div className="text-[#a2a2a2] text-md items-center flex gap-20 animate-scale">
					<a href="#privacy-policy" className="hover:underline">Privacy policy</a>
					<a href="#license-agreement" className="hover:underline">License agreement</a>
					<div className="bg-white rounded-2xl p-1">
						<QrCode />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
