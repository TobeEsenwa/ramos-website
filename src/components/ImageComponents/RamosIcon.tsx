import React from 'react';
import ramosIcon from '../../assets/images/ramosIcon.png'

const RamosIcon: React.FC = () => {
	return (
		<img
			alt="ramos-icon"
			loading="lazy"
			width="45"
			height="45"
			decoding="async"
			style={{color: 'transparent'}}
			srcSet={`${ramosIcon} 1x, ${ramosIcon} 2x`}
			src={ramosIcon}
		/>
	);
};

export default RamosIcon;
