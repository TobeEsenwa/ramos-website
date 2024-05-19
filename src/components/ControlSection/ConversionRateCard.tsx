import React from 'react';
import LinkBarIcon from '../ImageComponents/LinkBarIcon';

const ConversionRateCard: React.FC = () => {
	return (
		<div className="bg-white rounded-3xl border border-[#F0F0F0] flex flex-col justify-between items-center gap-4 py-8 min-w-[210px] shadow-[#eaeaeaa7] shadow-xl">
			<p className="text-black text-xs">Conversion rate</p>
			<div className="relative">
				<div className="p-5 relative overflow-hidden h-full">
					<div className="absolute -z-[1px] left-0 top-0 h-full w-full bg-[#FFD026] rounded-2xl" style={{ width: '100%' }}></div>
					<p className="relative z-10 text-[#1A1A1A] text-5xl">2,3%</p>
				</div>
				<div className="h-[22px] w-[22px] p-[2px] absolute -top-[8px] -left-[8px] border rounded-full bg-[--light-grey] flex justify-center items-center">
					<LinkBarIcon />
				</div>
			</div>
			<p className="text-[--grey] text-xs font-light">Percentage of<br /> website visitors</p>
		</div>
	);
};

export default ConversionRateCard;
