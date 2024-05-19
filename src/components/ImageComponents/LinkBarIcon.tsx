import React from 'react';
import linkBarIcon from '../../assets/images/link-bar-icon.png';

const LinkBarIcon: React.FC = () => {
	return (
		<img
			alt="link-bar-icon"
			loading="lazy"
			width="15"
			height="15"
			src={linkBarIcon}
			srcSet={`${linkBarIcon} 1x, ${linkBarIcon} 2x`}
			className="rounded-full"
			style={{ color: 'transparent' }}
		/>
	);
};

export default LinkBarIcon;
