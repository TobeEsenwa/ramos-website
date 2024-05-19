import React from 'react';
import stackIcon from '../../assets/images/stack-icon.png';

const StackIcon: React.FC = () => {
	return (
		<img
			alt="user-connecting"
			loading="lazy"
			width="35"
			height="35"
			src={stackIcon}
			srcSet={`${stackIcon} 1x, ${stackIcon} 2x`}
			style={{ color: 'transparent' }}
		/>
	);
};

export default StackIcon;
