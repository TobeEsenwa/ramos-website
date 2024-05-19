import React from 'react';
import linkIcon from '../../assets/images/link-icon.png';

const LinkIcon: React.FC = () => {
	return (
		<img
			alt="orange icon"
			loading="lazy"
			width="70"
			height="70"
			src={linkIcon}
		/>
	);
};

export default LinkIcon;
