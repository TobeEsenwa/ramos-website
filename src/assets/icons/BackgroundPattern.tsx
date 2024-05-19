import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundPattern: React.FC = () => {
	const textRef = useRef<HTMLHeadingElement | null>(null);

	useEffect(() => {
		const textElement = textRef.current;

		if (textElement) {
			gsap.fromTo(
				textElement,
				{ clipPath: 'circle(0px at 0px 50%)' },
				{ clipPath: 'circle(1500px at 300px 50%)', duration: 2, ease: 'power3.out' }
			);
		}
	}, []);

	return (
		<>
			<div className="h-[220px] relative top-[-65px] rotate-[180deg] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			<div className="h-[120px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
				<h1
					ref={textRef}
					className="text-[--accent-color] font-bold relative text-[380px] -top-[400px] left-[30px]"
					style={{ width: '1300px', clipPath: 'circle(0px at 0px 50%)' }}
				>
					Ramos
				</h1>
			</div>
		</>
	);
};

export default BackgroundPattern;
