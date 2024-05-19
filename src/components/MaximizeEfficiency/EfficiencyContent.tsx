import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import OrangeCommsIcon from '../ImageComponents/OrangeCommsIcon';

const EfficiencyContent: React.FC = () => {
	const textRef = useRef<HTMLDivElement | null>(null);
	const circlesRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const textElement = textRef.current;
		const circlesElement = circlesRef.current;
		const circles = circlesElement?.querySelectorAll('.circle');

		if (textElement) {
			gsap.fromTo(
				textElement,
				{ x: 0 },
				{
					x: '-50%',
					duration: 2,
					ease: 'power1.inOut',
					yoyo: true,
					repeat: -1,
				}
			);
		}

		if (circles) {
			gsap.set(circles, { scale: 0 });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to(circles, {
								scale: 1,
								duration: 1,
								ease: 'power3.out',
							});
							observer.unobserve(entry.target); // Ensure animation runs only once
						}
					});
				},
				{ threshold: 0.1 }
			);

			circles.forEach((circle) => observer.observe(circle));

			return () => {
				circles.forEach((circle) => observer.unobserve(circle));
			};
		}
	}, []);

	return (
		<div className="mt-10 flex justify-between items-center">
			<div ref={circlesRef} className="flex items-center">
        <span className="circle inline-flex h-[130px] w-[130px] bg-[#F2F2F2] rounded-full justify-center items-center relative left-4 z-20" style={{ transform: 'none' }}>
          <OrangeCommsIcon />
        </span>
				<span className="circle inline-flex flex-col h-[130px] w-[130px] text-center bg-[#FFD026] rounded-full justify-center items-center" style={{ transform: 'none' }}>
          <p className="text-[#1A1A1A] text-2xl">45%</p>
          <p className="text-[#1A1A1A] text-[9px]">System grow <br />faster</p>
        </span>
			</div>
			<div className="w-[500px] overflow-hidden text-extrabold tracking-tight bg-[--secondary-color] rounded-[60px] text-[105px] text-black leading-[153px]" style={{ whiteSpace: 'nowrap', transform: 'none' }}>
				<div ref={textRef} className="inline-block">
					Analytics service
				</div>
			</div>
		</div>
	);
};

export default EfficiencyContent;
