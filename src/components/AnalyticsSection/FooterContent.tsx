import React from 'react';

const FooterContent: React.FC = () => {
	return (
		<div className="flex justify-center items-center mt-10 max-w-[800px] gap-6 mx-auto">
			<p className="text-[#1A1A1A] self-end text-xl">Up to</p>
			<p className="text-8xl text-[#1A1A1A]">45%</p>
			<p className="text-black font-extralight text-sm">
				Increase your analytics efficiency up to 45% Unique<br />
				algorithms provide insights from data reduce time for analysis<br />
				and save time for making important informed decisions
			</p>
		</div>
	);
};

export default FooterContent;
