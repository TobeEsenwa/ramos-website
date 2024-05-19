import React from 'react';
import GraphLine from '../ImageComponents/GraphLine';
import InsightsIcon from '../ImageComponents/InsightsIcon';
import FinanceIcon from '../ImageComponents/FinanceIcon';

const KeyIndicatorsCard: React.FC = () => {
	return (
		<div className="flex-1 relative p-[40px_90px] z-10 overflow-hidden rounded-3xl bg-[#F9F9F9] text-center mx-auto shadow-xl shadow-[#b0aeae27] border border-[#ededed]">
			<div className="absolute w-full h-1/2 -z-10 bg-[#F9F9F9] top-0 left-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			<div className="bg-[#FBFBFB] relative w-[80%] mx-auto -z-2 rounded-t-2xl p-5 border border-[#EEEEEE] shadow-xl shadow-[#e1dcdc31] flex justify-center items-end gap-16"></div>
			<div className="bg-[#FBFBFB] w-[90%] relative -top-[20px] mx-auto -z-1 rounded-t-2xl p-3 border border-[#EEEEEE] shadow-xl shadow-[#e1dcdc31] flex justify-start items-end gap-16">
				<div className="flex items-center justify-start">
					<div className="bg-[--light-grey] rounded-full mr-[9px] w-5 h-5 flex justify-center items-center">
						<FinanceIcon />
					</div>
					<p className="text-xs">Finance reports</p>
				</div>
			</div>
			<div className="bg-white relative -top-[25px] rounded-2xl p-4 border border-[#EEEEEE] shadow-xl shadow-[#e1dcdc31] flex justify-between items-end">
				<div className="text-left">
					<div className="flex items-center justify-start">
						<div className="bg-[--light-grey] rounded-full mr-[9px] w-5 h-5 flex justify-center items-center">
							<InsightsIcon />
						</div>
						<p className="text-xs"> Insights</p>
					</div>
					<p className="text-xs mt-14 text-[--grey]">Total profit</p>
					<p className="text-2xl mt-2">$ 264.2K</p>
					<button className="min-w-[100px] self-start bg-[--secondary-color] text-black rounded-lg py-2 px-3 mt-4 text-[9px] shadow-lg">
						Data Visualization
					</button>
				</div>
				<div className="flex relative">
					<div className="absolute w-[150px] h-[100px] top-[-50px] -left-[0px]" style={{ width: '150px', opacity: 1 }}>
						<GraphLine />
					</div>
					<div className="flex justify-center gap-3 items-end max-h-[200px]">
						<div className="flex flex-col items-center">
							<div className="w-[25px] rounded-md" style={{ height: '60px', background: 'rgb(230, 230, 230)' }}></div>
							<p className="text-[8px] text-[#d7d6d6] mt-2">2021</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-[25px] rounded-md" style={{ height: '25px', background: 'rgb(230, 230, 230)' }}></div>
							<p className="text-[8px] text-[#d7d6d6] mt-2">2020</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-[25px] rounded-md" style={{ height: '60px', background: 'rgb(230, 230, 230)' }}></div>
							<p className="text-[8px] text-[#d7d6d6] mt-2">2019</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-[25px] rounded-md" style={{ height: '90px', background: 'rgb(255, 208, 38)' }}></div>
							<p className="text-[8px] text-[#d7d6d6] mt-2">2018</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-[25px] rounded-md" style={{ height: '45px', background: 'rgb(230, 230, 230)' }}></div>
							<p className="text-[8px] text-[#d7d6d6] mt-2">2017</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h6 className="text-black text-xl my-4">Monitoring Key indicators</h6>
				<p className="text-sm">
					Analytics platform allows businesses to track KPIs<br /> an important tool for measuring success<br /> and achieving goals
				</p>
			</div>
		</div>
	);
};

export default KeyIndicatorsCard;
