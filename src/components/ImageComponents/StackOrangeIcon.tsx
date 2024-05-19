import React from 'react';
import stackOrange from '../../assets/images/stack-orange.png';

const StackOrangeIcon: React.FC = () => {
	return (
		<img
			alt="stack-orange"
			loading="lazy"
			width="25"
			height="25"
			src={stackOrange}
			srcSet={`${stackOrange} 1x, ${stackOrange} 2x`}
			style={{ color: 'transparent' }}
		/>
	);
};

export default StackOrangeIcon;
