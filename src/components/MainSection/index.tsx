import React, { useEffect, useRef } from 'react';
import ThunderIcon from '../ImageComponents/ThunderIcon';
import LinkIcon from '../ImageComponents/LinkIcon';
import SmallLaptopImage from '../ImageComponents/SmallLaptopImage';
import ThreeLines from '../ImageComponents/ThreeLines';
import PlayIcon from '../ImageComponents/PlayIcon';
import { gsap } from 'gsap';
import {StaggeringAnimatedText} from '../../assets/misc/StaggeringAnimatedText';

const MainSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const rotatingIcons = sectionRef.current?.querySelectorAll(".rotate-scale");
		const scalingIcons = sectionRef.current?.querySelectorAll(".scale-only");

		if(!rotatingIcons || !scalingIcons) {
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Animate rotating and scaling icons
						gsap.fromTo(
							rotatingIcons,
							{
								scale: 0,
								rotate: "180deg",
							},
							{
								scale: 1,
								rotate: "0deg",
								duration: 1.5,
								ease: "power3.out",
								stagger: {
									each: 0.2,
									from: "start",
									amount: 0.8,
								},
								delay: 0.25,
							}
						);

						// Animate scaling-only icons
						gsap.fromTo(
							scalingIcons,
							{
								scale: 0,
							},
							{
								scale: 1,
								duration: 1.3,
								ease: "power3.out",
								stagger: {
									each: 0.2,
									from: "start",
									amount: 0.8,
								},
								delay: 0.25,
							}
						);
					} else {
						gsap.set(rotatingIcons, { scale: 0, rotate: "180deg" });
						gsap.set(scalingIcons, { scale: 0 });
					}
				});
			},
			{ threshold: 0.1 } // Adjust this threshold as needed
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section className="bg-white h-screen flex justify-center items-center px-4">
			<div ref={sectionRef} className="container flex justify-center items-center py-12 md:py-24 w-full">
				<div className="hero-text">
					<div className="text-[105px] leading-[110px] font-medium tracking-tight text-dark mb-4">
						<div className="flex items-center">
							<div className="flex flex-col mr-6">
								<div className="flex items-center self-end">
                  <span className="rotate-scale icon inline-flex h-[100px] w-[100px] bg-[--light-grey] rounded-full justify-center items-center relative left-4">
                    <ThunderIcon />
                  </span>
									<span className="rotate-scale icon inline-flex h-[100px] w-[100px] bg-[--accent-color] rounded-full justify-center items-center">
                    <LinkIcon />
                  </span>
									<span className="overflow-y-hidden inline-flex whitespace-nowrap">
                    <StaggeringAnimatedText text="Analytics" />
                  </span>
								</div>
								<div className="block-translate-x-12">
                  <span className="overflow-y-hidden inline-flex whitespace-nowrap">
                    <StaggeringAnimatedText text="that" />
                  </span>
									<span className="text-gray-400 overflow-y-hidden inline-flex whitespace-nowrap">
                    <StaggeringAnimatedText text="helps" />
                  </span>
									<span className="overflow-y-hidden inline-flex whitespace-nowrap">
                    <StaggeringAnimatedText text="you" />
                  </span>
								</div>
							</div>
							<div className="relative ">
                <span className="rotate-scale absolute -top-5 z-10 -left-5 inline-flex rounded-full bg-[--accent-color] justify-center items-center w-[50px] h-[50px]">
                  <PlayIcon />
                </span>
								<span className="scale-only relative inline-block">
                  <span className="absolute top-0 left-0 h-[50px] w-[50px] bg-[--light-grey]"></span>
                  <SmallLaptopImage />
                </span>
							</div>
						</div>
						<div className="flex justify-end items-center">
              <span className="overflow-y-hidden inline-flex whitespace-nowrap">
                <StaggeringAnimatedText text="shape" />
              </span>
							<span className="scale-only icon inline-flex h-[100px] w-[100px] bg-[--secondary-color] rounded-full justify-center items-center mx-6 ml-1">
                <ThreeLines />
              </span>
							<span className="overflow-y-hidden inline-flex whitespace-nowrap">
                <StaggeringAnimatedText text="the" />
                <StaggeringAnimatedText text="future" />
              </span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
