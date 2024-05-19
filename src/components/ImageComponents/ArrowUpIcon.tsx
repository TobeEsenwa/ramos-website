import React from 'react';
import arrowUp from '../../assets/images/arrow-up.png';

const ArrowUpIcon: React.FC = () => {
	return (
		<img
			alt="arrow-up"
			loading="lazy"
			width="11"
			height="11"
			src={arrowUp}
			srcSet={`${arrowUp} 1x, ${arrowUp} 2x`}
			className="rounded-full"
			style={{ color: 'transparent' }}
		/>
	);
};

export default ArrowUpIcon;
