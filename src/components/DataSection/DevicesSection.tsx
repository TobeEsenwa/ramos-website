import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PhoneImage from '../ImageComponents/PhoneImage';
import LaptopImage from '../ImageComponents/LaptopImage';
import DashboardImage from '../ImageComponents/DashboardImage';

const DevicesSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const sectionElement = sectionRef.current;
		const phoneElement = sectionElement?.querySelector('.phone-image');
		const laptopElement = sectionElement?.querySelector('.laptop-image');

		if (phoneElement && laptopElement) {
			gsap.set([phoneElement, laptopElement], { y: 50, opacity: 0 });

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.to([phoneElement, laptopElement], {
								y: 0,
								opacity: 1,
								duration: 1,
								ease: 'power3.out',
								stagger: 0.3,
							});
						} else {
							gsap.set([phoneElement, laptopElement], { y: 50, opacity: 0 });
						}
					});
				},
				{ threshold: 0.1 }
			);

			if (sectionElement) {
				observer.observe(sectionElement);
			}

			return () => {
				if (sectionElement) {
					observer.unobserve(sectionElement);
				}
			};
		}
	}, []);

	return (
		<div ref={sectionRef} className="relative left-[40px]">
			<div className="phone-image absolute -left-[250px] -bottom-[100px] z-10" style={{ transform: 'none' }}>
				<PhoneImage />
			</div>
			<div className="laptop-image relative h-[700px] w-[700px]" style={{ transform: 'none' }}>
				<LaptopImage />
				<div className="absolute -left-[22px] top-[33px] h-[635px] w-[900px]">
					<div className="absolute h-[19px] w-[19px] bg-white top-0 left-[50px] z-20"></div>
					<DashboardImage />
				</div>
			</div>
		</div>
	);
};

export default DevicesSection;
