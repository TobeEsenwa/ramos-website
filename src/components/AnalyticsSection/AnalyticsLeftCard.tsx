import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CountUp from 'react-countup';
import ArrowUpIcon from '../ImageComponents/ArrowUpIcon';
import StackOrangeIcon from '../ImageComponents/StackOrangeIcon';
import PentagonIcon from '../ImageComponents/PentagonIcon';
import GraphIcon from '../ImageComponents/GraphIcon';

const AnalyticsLeftCard: React.FC = () => {
	const [triggerCountUp, setTriggerCountUp] = useState(false);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTriggerCountUp(true);
						if (progressBarRef.current) {
							gsap.fromTo(
								progressBarRef.current,
								{ width: '0%' },
								{ width: '35%', duration: 2, ease: 'power3.out' }
							);
						}
					} else {
						setTriggerCountUp(false);
						if (progressBarRef.current) {
							gsap.set(progressBarRef.current, { width: '0%' });
						}
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	return (
		<div ref={cardRef} className="bg-white pt-8 pl-8 border border-[#e6e6e67b] rounded-[50px] shadow-xl shadow-[#eaeaea84] flex justify-between items-center gap-8 overflow-hidden flex-[60%]">
			<div className="flex flex-col self-start">
				<button className="self-start bg-[--secondary-color] text-black rounded-lg py-2 px-3 text-[10px] shadow-lg">
					Setting up reports
				</button>
				<h4 className="text-[#1A1A1A] text-[20px] mt-14">
					Fast and easy access<br /> to analytics
				</h4>
				<p className="self-end text-[#9C9C9C] mt-6 text-sm leading-[20px] font-light">
					One platform is a comprehensive <br /> system of solution that will be the <br /> first step towards digitalization of <br /> your business!
				</p>
			</div>
			<div className="border rounded-[25px] border-b-0 rounded-bl-none rounded-r-none p-4 flex flex-col gap-2">
				<p className="text-black text-sm">Sales statistic</p>
				<div className="flex justify-between items-center gap-4">
					<div className="flex justify-center items-center gap-3">
            <span className="inline-flex rounded-[50px] bg-[--accent-color] justify-center items-center w-[45px] h-[45px]">
              <StackOrangeIcon />
            </span>
						<div className="flex flex-col gap-1">
							<p className="text-[#9C9C9C] text-xs">Total profit</p>
							<p className="text-[#1A1A1A] text-2xl">$ 264.2k</p>
						</div>
					</div>
					<div className="flex flex-col justify-center items-start gap-3 bg-[#F6F6F6] p-3 rounded-[20px] min-w-[115px]">
						<p className="text-[#1A1A1A] text-xs">Visitors</p>
						<div className="h-[2.5px] w-full bg-[#d5d5d59c] rounded-[10px] overflow-hidden">
							<div ref={progressBarRef} className="h-full bg-[#48C884] rounded-[10px]" style={{ width: '35%' }}></div>
						</div>
						<div className="relative">
							<div className="absolute -right-[35px] -top-[3px] flex justify-center items-center">
								<div className="rounded-full h-[13px] w-[13px] bg-[#48C884] flex justify-center items-center">
									<ArrowUpIcon />
								</div>
								<span className="text-[#48C884] text-[8px] ml-1">
									<CountUp key={triggerCountUp ? 'percentage' : ''} start={0} end={14} duration={2} suffix="%" />
								</span>
							</div>
							<span className="text-[#1A1A1A] text-2xl font-light inline-flex min-w-[40px]">
                <CountUp key={triggerCountUp ? 'visitors' : ''} end={56} duration={2} separator="," />k
              </span>
						</div>
					</div>
				</div>
				<div className="relative">
					<GraphIcon />
					<div className="px-[15px] py-[5px] flex flex-col justify-between absolute bottom-[16px] right-[19px] h-[64px] w-[100px] rounded-2xl bg-[--accent-color]">
						<div className="flex justify-between items-center">
							<p className="text-white text-[10px]">Rate</p>
							<PentagonIcon />
						</div>
						<span className="text-white text-[20px] font-light inline-flex">
              <CountUp key={triggerCountUp ? 'rate' : ''} end={58} duration={2} suffix="%" />
            </span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnalyticsLeftCard;
