import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CountUp from 'react-countup';
import UsersIcon from '../ImageComponents/UsersIcon';
import StackIcon from '../ImageComponents/StackIcon';
import ArrowUpIcon from '../ImageComponents/ArrowUpIcon';

const AnalyticsRightCard: React.FC = () => {
	const [triggerCountUp, setTriggerCountUp] = useState(false);
	const cardsRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const cards = cardsRef.current?.querySelectorAll('.card');

		if (!cards) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTriggerCountUp(true);
						gsap.fromTo(
							cards,
							{ x: 0 },
							{
								x: (index) => (index === 0 ? '-10%' : '10%'),
								duration: 1,
								ease: 'power3.out',
							}
						);
					} else {
						setTriggerCountUp(false);
						gsap.set(cards, { x: 0 });
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (cardsRef.current) {
			observer.observe(cardsRef.current);
		}

		return () => {
			if (cardsRef.current) {
				observer.unobserve(cardsRef.current);
			}
		};
	}, []);

	return (
		<div className="bg-black p-10 px-14 shadow-[#eaeaea84] rounded-3xl shadow-xl flex flex-col items-center justify-between basis-[40%] self-stretch">
			<div ref={cardsRef} className="flex justify-center gap-2">
				<div className="card py-1 border min-w-[135px] border-[#232323] bg-ramos-black rounded-[30px]">
					<div className="flex flex-col justify-center items-center p-4 px-6">
						<StackIcon />
						<UsersIcon />
					</div>
				</div>
				<div className="card py-1 border min-w-[135px] border-[#232323] bg-ramos-black rounded-[30px]">
					<div className="flex flex-col h-full justify-between items-stretch p-4 px-7">
						<p className="text-[10px] text-white">Transactions</p>
						<div className="relative">
							<div className="absolute -right-[13px] -top-[23px] flex justify-center items-center">
								<div className="rounded-full h-[17px] w-[17px] bg-[#48C884] flex justify-center items-center">
									<ArrowUpIcon />
								</div>
								<span className="text-[#48C884] text-[8px] ml-1">
                  <CountUp key={triggerCountUp ? 'percentage' : ''} start={0} end={14} duration={2} suffix="%" />
                </span>
							</div>
							<span className="text-white text-[40px] font-light leading-none">
                <CountUp key={triggerCountUp ? 'transactions' : ''} start={0} end={43} duration={2} separator="," />k
              </span>
						</div>
					</div>
				</div>
			</div>
			<h4 className="text-white text-2xl my-5 mb-3">Widget control</h4>
			<p className="text-[#a7a6a6] text-sm text-center font-extralight">
				Reports provide a comprehensive overview <br /> of important aspects of web analytics
			</p>
		</div>
	);
};

export default AnalyticsRightCard;
