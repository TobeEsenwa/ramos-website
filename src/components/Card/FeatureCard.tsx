import React from 'react';

interface FeatureCardProps {
	title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => {
	return (
		<div className="bg-white flex justify-between items-center py-4 px-8 rounded-3xl shadow-[#eaeaeaa7] shadow-xl" style={{ transform: 'none' }}>
			<p className="text-lg text-black">{title}</p>
			<button className="text-black text-lg bg-[#f0f0f0] h-[40px] w-[40px] flex items-center justify-center rounded-full">+</button>
		</div>
	);
};

export default FeatureCard;
