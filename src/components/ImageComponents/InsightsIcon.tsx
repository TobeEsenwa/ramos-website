import React from 'react';
import insightIcon from '../../assets/images/insight-icon.png';

const InsightsIcon: React.FC = () => {
	return (
		<img
			alt="link-bar-icon"
			loading="lazy"
			width="15"
			height="15"
			src={insightIcon}
			srcSet={`${insightIcon} 1x, ${insightIcon} 2x`}
			className="rounded-full"
			style={{ color: 'transparent' }}
		/>
	);
};

export default InsightsIcon;
