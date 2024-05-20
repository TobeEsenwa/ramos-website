import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LinkBarIcon from '../ImageComponents/LinkBarIcon';

const ConversionRateCard: React.FC = () => {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const bgRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const cardElement = cardRef.current;
		const bgElement = bgRef.current;

		if (cardElement && bgElement) {
			gsap.set(bgElement, { x: '-100%' });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to(bgElement, {
								x: '0%',
								duration: 1.5,
								ease: 'power3.out',
							});
						} else {
							gsap.set(bgElement, { x: '-100%' });
						}
					});
				},
				{ threshold: 0.1 }
			);

			observer.observe(cardElement);

			return () => {
				observer.unobserve(cardElement);
			};
		}
	}, []);

	return (
		<div ref={cardRef} className="bg-white rounded-3xl border border-[#F0F0F0] flex flex-col justify-between items-center gap-4 py-8 min-w-[210px] shadow-[#eaeaeaa7] shadow-xl">
			<p className="text-black text-xs">Conversion rate</p>
			<div className="relative">
				<div className="p-5 relative overflow-hidden h-full">
					<div ref={bgRef} className="absolute -z-[1px] left-0 top-0 h-full w-full bg-[#FFD026] rounded-2xl"></div>
					<p className="relative z-10 text-[#1A1A1A] text-5xl">2,3%</p>
				</div>
				<div className="h-[22px] w-[22px] p-[2px] absolute -top-[8px] -left-[8px] border rounded-full bg-[--light-grey] flex justify-center items-center">
					<LinkBarIcon />
				</div>
			</div>
			<p className="text-[--grey] text-xs font-light">Percentage of<br /> website visitors</p>
		</div>
	);
};

export default ConversionRateCard;
