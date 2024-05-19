import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FeatureCard from '../Card/FeatureCard';

const FeaturesList: React.FC = () => {
	const listRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const listElement = listRef.current;
		const cards = listElement?.querySelectorAll('.feature-card');

		if (cards) {
			gsap.set(cards, { y: -50, opacity: 0 });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to(entry.target, {
								y: 0,
								opacity: 1,
								duration: 1,
								ease: 'power3.out',
								stagger: 0.3,
							});
						} else {
							gsap.to(entry.target, {
								y: -50,
								opacity: 0,
								duration: 1,
								ease: 'power3.out',
							});
						}
					});
				},
				{ threshold: 0.1 }
			);

			cards.forEach((card) => observer.observe(card));

			return () => {
				cards.forEach((card) => observer.unobserve(card));
			};
		}
	}, []);

	return (
		<div ref={listRef} className="flex flex-col gap-4 mt-20">
			<div className="feature-card">
				<FeatureCard title="Instant Insights" />
			</div>
			<div className="feature-card">
				<FeatureCard title="AI technology" />
			</div>
			<div className="feature-card">
				<FeatureCard title="Easy integration" />
			</div>
		</div>
	);
};

export default FeaturesList;
