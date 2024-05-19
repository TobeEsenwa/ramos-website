import React from 'react';
import IntroText from './IntroText';
import FeaturesList from './FeaturesList';
import DevicesSection from './DevicesSection';
import BackgroundPattern from '../../assets/icons/BackgroundPattern';

const DataSection: React.FC = () => {
	return (
		<section className="bg-[#F9F9F9] overflow-hidden rounded-[100px] h-full">
			<div className="pt-[100px] pl-10 relative z-[2]">
				<div className="flex justify-between items-start">
					<div>
						<IntroText />
						<FeaturesList />
					</div>

					<DevicesSection />
				</div>
			</div>
			<BackgroundPattern />
		</section>
	);
};

export default DataSection;
