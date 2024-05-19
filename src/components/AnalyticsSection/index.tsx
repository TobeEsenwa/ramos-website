import React from 'react';
import HeaderContent from './HeaderContent';
import AnalyticsContent from './AnalyticsContent';
import FooterContent from './FooterContent';

const AnalyticsSection: React.FC = () => {
	return (
		<section className="w-full relative bg-[#F9F9F9] rounded-[100px] h-full py-[85px] flex flex-col items-center justify-center">
			<HeaderContent />
			<AnalyticsContent />
			<FooterContent />
		</section>
	);
};

export default AnalyticsSection;
