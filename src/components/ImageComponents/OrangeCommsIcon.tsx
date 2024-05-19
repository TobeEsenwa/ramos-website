import React from 'react';
import orangeCommsIcon from '../../assets/images/orange-comms-icon.png'

const OrangeCommsIcon: React.FC = () => {
	return (
		<img
			alt="orange-comms"
			loading="lazy"
			width="90"
			height="90"
			src={orangeCommsIcon}
			srcSet={`${orangeCommsIcon} 1x, ${orangeCommsIcon} 2x`}
			style={{ color: 'transparent' }}
		/>
	);
};

export default OrangeCommsIcon;
