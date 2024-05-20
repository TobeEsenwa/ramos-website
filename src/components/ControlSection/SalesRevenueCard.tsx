import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CountUp from 'react-countup';
import User2 from '../ImageComponents/User2';
import User1 from '../ImageComponents/User1';

const SalesRevenueCard: React.FC = () => {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [countUpVisible, setCountUpVisible] = useState(false);

	useEffect(() => {
		const cardElement = cardRef.current;
		const progressBars = cardElement?.querySelectorAll('.progress-bar');

		if (cardElement && progressBars) {
			const animate = () => {
				gsap.fromTo(progressBars[0], { width: '0%' }, { width: '33%', duration: 1.5, ease: 'power3.out' });
				gsap.fromTo(progressBars[1], { width: '0%' }, { width: '32%', duration: 1.5, ease: 'power3.out', delay: 0.3 });
				gsap.fromTo(progressBars[2], { width: '0%' }, { width: '32%', duration: 1.5, ease: 'power3.out', delay: 0.6 });
			};

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setCountUpVisible(true);
							animate();
						} else {
							setCountUpVisible(false);
							gsap.set(progressBars, { width: '0%' });
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
		<div
			ref={cardRef}
			className="bg-white min-w-[210px] rounded-3xl border border-[#F0F0F0] shadow-[#eaeaeaa7] shadow-xl relative top-[20px] -left-[20px] flex flex-col justify-between items-start gap-2 px-3 py-4"
		>
			<p className="text-[--grey] text-xs">Sales revenue</p>
			<div>
				<span>$ </span>
				<span className="text-black text-2xl mb-2">
          {countUpVisible && <CountUp end={131} duration={2} separator="," />}k
        </span>
			</div>
			<div className="h-[5px] flex gap-[2px] rounded-xl w-full overflow-hidden">
				<div className="progress-bar h-full bg-[#48C884] rounded-2xl"></div>
				<div className="progress-bar h-full bg-[--secondary-color] rounded-2xl"></div>
				<div className="progress-bar h-full bg-[#8A5CFF] rounded-2xl"></div>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex justify-between items-center gap-10">
					<div className="flex justify-center items-center gap-1 relative -left-[5px]">
						<User1 />
						<p className="text-[--grey] text-[10px]">Min. Price</p>
					</div>
					<p className="text-black text-[10px]">1,200 $</p>
				</div>
				<div className="flex justify-between items-center gap-10">
					<div className="flex justify-center items-center gap-1 relative -left-[5px]">
						<User2 />
						<p className="text-[--grey] text-[10px]">Max. Price</p>
					</div>
					<p className="text-black text-[10px]">2,320 $</p>
				</div>
			</div>
			<hr className="border-[#eeeeee] border-[0.5px] w-full my-1 block" />
			<div className="flex justify-between items-center w-full">
				<p className="text-[--grey] text-[10px]">Engagement rate</p>
				<p className="text-black text-[10px]">47.84%</p>
			</div>
		</div>
	);
};

export default SalesRevenueCard;
