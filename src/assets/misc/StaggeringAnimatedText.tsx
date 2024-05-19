import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";

interface StaggeringAnimatedTextProps {
	text: string;
	className?: string;
}

export const StaggeringAnimatedText: React.FC<StaggeringAnimatedTextProps>
	= ({
		   text,
		   className,
	   }) => {
	const textRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		const chars = textRef.current?.querySelectorAll(".char");

		if (!chars) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							chars,
							{
								opacity: 0,
								y: 100,
								rotate: "5deg",
							},
							{
								opacity: 1,
								y: 0,
								rotate: "0deg",
								duration: 1.3,
								ease: "power3.out",
								stagger: {
									each: 0.1,
									from: "start",
									amount: 1,
								},
								delay: 0.25,
							}
						);
					} else {
						gsap.set(chars, {opacity: 0, y: 100, rotate: "5deg"});
					}
				});
			},
			{threshold: 0.1} // Adjust this threshold as needed
		);

		if (textRef.current) {
			observer.observe(textRef.current);
		}

		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current);
			}
		};
	}, [text]);

	return (
		<span
			ref={textRef}
			className={`${className} overflow-y-hidden inline-flex`}
			style={{whiteSpace: "nowrap"}}
		>
      {text.split(" ").map((word, index) => (
	      <span
		      key={`${word}-${index}`}
		      className="overflow-hidden"
	      >
          <span className="char inline-block">{word}</span>
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
	);
};
