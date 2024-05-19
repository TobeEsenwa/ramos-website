import React from 'react';
import pentagon from '../../assets/images/pentagon.png';

const PentagonIcon: React.FC = () => {
	return (
		<img
			alt="pentagon"
			loading="lazy"
			width="18"
			height="18"
			src={pentagon}
			srcSet={`${pentagon} 1x, ${pentagon} 2x`}
			style={{ color: 'transparent' }}
		/>
	);
};

export default PentagonIcon;
