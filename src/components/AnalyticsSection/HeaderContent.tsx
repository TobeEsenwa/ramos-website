import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeaderContent: React.FC = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const elements = headerRef.current?.querySelectorAll(".scale-text");

		if (!elements) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							elements,
							{ scale: 0.6, y: 80 },  // start slightly scaled down and much lower on the y-axis
							{
								scale: 1,
								y: 0,
								duration: 0.8,  // slightly faster animation
								ease: "power3.out",
								stagger: 0 // No stagger, animate all at the same time
							}
						);
					} else {
						gsap.set(elements, { scale: 0.6, y: 80 });
					}
				});
			},
			{ threshold: 0.1 } // Adjust this threshold as needed
		);

		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, []);

	return (
		<div ref={headerRef} className="px-12 mx-auto w-full">
			<div className="w-full relative flex justify-between items-center">
				<div className="text-[40px] text-black leading-[45px] scale-text">
					<span>Your Key to strategic</span> <br />
					<span>success through analytics</span>
				</div>
				<p className="text-[18px] text-[#1A1A1A] scale-text">
					Ready for exciting, instantaneous,<br /> all-accessible insights in real time?
				</p>
			</div>
		</div>
	);
};

export default HeaderContent;
