import React from 'react';
import thunderIcon from '../../assets/images/thunder-icon.png';

const ThunderIcon: React.FC = () => {
	return (
		<img
			alt="thunder-icon"
			loading="lazy"
			width="55"
			height="55"
			src={thunderIcon}
		/>
	);
};

export default ThunderIcon;
