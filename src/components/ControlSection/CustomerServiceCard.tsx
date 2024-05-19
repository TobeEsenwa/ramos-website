import React from 'react';
import ConversionRateCard from './ConversionRateCard';
import SalesRevenueCard from './SalesRevenueCard';

const CustomerServiceCard: React.FC = () => {
	return (
		<div className="relative p-[40px_90px] self-stretch justify-between flex flex-col flex-1 overflow-hidden rounded-3xl bg-[#F9F9F9] text-center mx-auto shadow-xl shadow-[#b0aeae27] border border-[#ededed]">
			<div className="absolute w-full h-1/2 bg-[#F9F9F9] top-0 left-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			<div className="flex relative">
				<ConversionRateCard />
				<SalesRevenueCard />
			</div>
			<div>
				<h6 className="text-black text-2xl my-4">Improved customer service</h6>
				<p className="text-black text-sm">
					Analytics helps optimize service process by <br /> providing information on how to improve interactions <br /> with customers and increase their satisfaction
				</p> 
			</div>
		</div>
	);
};

export default CustomerServiceCard;
