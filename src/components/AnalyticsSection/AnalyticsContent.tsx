import React from 'react';
import AnalyticsLeftCard from './AnalyticsLeftCard';
import AnalyticsRightCard from './AnalyticsRightCard';

const AnalyticsContent: React.FC = () => {
	return (
		<div className="flex justify-between items-center mt-20 gap-5">
			<AnalyticsLeftCard />
			<AnalyticsRightCard />
		</div>
	);
};

export default AnalyticsContent;
