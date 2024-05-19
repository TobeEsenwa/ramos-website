import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IntroText: React.FC = () => {
	const textRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const textElement = textRef.current;

		if (textElement) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.fromTo(
								textElement,
								{
									y: 70,
									opacity: 0,
								},
								{
									y: 0,
									opacity: 1,
									duration: 1,
									ease: 'power3.out',
								}
							);
						}
					});
				},
				{ threshold: 0.1 }
			);

			observer.observe(textElement);

			return () => {
				observer.unobserve(textElement);
			};
		}
	}, []);

	return (
		<div ref={textRef} className="w-full relative">
			<div>
				<p className="text-4xl text-black">
					Turning data into real<br />actions and ideas.
				</p>
			</div>
		</div>
	);
};

export default IntroText;
