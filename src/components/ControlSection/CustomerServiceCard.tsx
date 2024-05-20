import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ConversionRateCard from './ConversionRateCard';
import SalesRevenueCard from './SalesRevenueCard';

const CustomerServiceCard: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const conversionRateCardRef = useRef<HTMLDivElement | null>(null);
	const salesRevenueCardRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const containerElement = containerRef.current;
		const conversionRateCard = conversionRateCardRef.current;
		const salesRevenueCard = salesRevenueCardRef.current;

		if (containerElement && conversionRateCard && salesRevenueCard) {
			gsap.set(conversionRateCard, { x: 100, opacity: 0 });
			gsap.set(salesRevenueCard, { x: -100, opacity: 0 });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to(conversionRateCard, {
								x: 0,
								opacity: 1,
								duration: 1,
								ease: 'power3.out',
							});
							gsap.to(salesRevenueCard, {
								x: 0,
								opacity: 1,
								duration: 1,
								ease: 'power3.out',
							});
						} else {
							gsap.set(conversionRateCard, { x: 100, opacity: 0 });
							gsap.set(salesRevenueCard, { x: -100, opacity: 0 });
						}
					});
				},
				{ threshold: 0.1 }
			);

			observer.observe(containerElement);

			return () => {
				observer.unobserve(containerElement);
			};
		}
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative p-[40px_90px] self-stretch justify-between flex flex-col flex-1 overflow-hidden rounded-3xl bg-[#F9F9F9] text-center mx-auto shadow-xl shadow-[#b0aeae27] border border-[#ededed]"
		>
			<div className="absolute w-full h-1/2 bg-[#F9F9F9] top-0 left-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			<div className="flex relative">
				<div ref={conversionRateCardRef}>
					<ConversionRateCard />
				</div>
				<div ref={salesRevenueCardRef}>
					<SalesRevenueCard />
				</div>
			</div>
			<div>
				<h6 className="text-black text-2xl my-4">Improved customer service</h6>
				<p className="text-black text-sm">
					Analytics helps optimize service process by <br /> providing information on how to improve interactions <br /> with customers and increase their satisfaction
				</p>
			</div>
		</div>
	);
};

export default CustomerServiceCard;
