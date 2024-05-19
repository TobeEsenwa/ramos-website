import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Description: React.FC = () => {
	const textRef = useRef<HTMLParagraphElement | null>(null);

	useEffect(() => {
		const textElement = textRef.current;

		if (textElement) {
			const lines = textElement.querySelectorAll('.line');

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.fromTo(
								lines,
								{
									y: 50,
									opacity: 0,
								},
								{
									y: 0,
									opacity: 1,
									duration: 1,
									ease: 'power3.out',
									stagger: {
										each: 0.5,
										from: 'start',
									},
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
		<p ref={textRef} className="text-black" style={{ transform: 'none' }}>
      <span className="line inline-block overflow-hidden">
        Explore traffic sources, page behaviour, conversions and more to gain deep insight
      </span>
			<br />
			<span className="line inline-block overflow-hidden">
        into your audience. With us, your business doesn’t just adapt - it evolves
      </span>
		</p>
	);
};

export default Description;
