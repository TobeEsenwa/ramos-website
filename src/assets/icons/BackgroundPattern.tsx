import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundPattern: React.FC = () => {
	const textRef = useRef<HTMLHeadingElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const textElement = textRef.current;
		const containerElement = containerRef.current;

		if (textElement && containerElement) {
			gsap.set(textElement, { clipPath: 'circle(0px at 50px 50%)' });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.fromTo(
								textElement,
								{ clipPath: 'circle(0px at 50px 50%)' },
								{ clipPath: 'circle(1500px at 50px 50%)', duration: 4, ease: 'power3.out' } // Increased duration for slower animation
							);
						} else {
							gsap.set(textElement, { clipPath: 'circle(0px at 50px 50%)' });
						}
					});
				},
				{ threshold: 0.1 } // Adjust this threshold as needed
			);

			observer.observe(containerElement);

			return () => {
				observer.unobserve(containerElement);
			};
		}
	}, []);

	return (
		<>
			<div className="h-[220px] relative top-[-65px] rotate-[180deg] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			<div ref={containerRef} className="h-[120px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
				<h1
					ref={textRef}
					className="text-[--accent-color] font-bold relative text-[380px] -top-[400px] left-[30px]"
				>
					Ramos
				</h1>
			</div>
		</>
	);
};

export default BackgroundPattern;
