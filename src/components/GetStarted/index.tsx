import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GetStartedHeading from './GetStartedHeading';
import GetStartedText from './GetStartedText';
import ActionButtons from '../Buttons/ActionButtons';
import RamosIcon from '../ImageComponents/RamosIcon';

const SectionContainer: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const containerElement = containerRef.current;

		if (containerElement) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							gsap.fromTo(
								containerElement,
								{ scale: 1 },
								{
									scale: 1.3,
									duration: 0.3,
									ease: 'power3.out',
									yoyo: true,
									repeat: 1,
								}
							);
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
		<section className="flex flex-col items-center justify-center gap-10 my-20">
			<div ref={containerRef}  className="relative bg-[--accent-color] rounded-[35px] h-[95px] w-[95px] flex justify-center items-center">
				<RamosIcon />
			</div>
			<GetStartedHeading />
			<GetStartedText />
			<ActionButtons />
		</section>
	);
};

export default SectionContainer;
