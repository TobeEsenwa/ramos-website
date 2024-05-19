import React from 'react';
import brandIcon from '../../assets/images/brand-icon.png'

const BrandIcon: React.FC = () => {
	return (
		<img
			alt="brand-icon"
			loading="lazy"
			width="35"
			height="35"
			decoding="async"
			style={{color: 'transparent'}}
			srcSet={`${brandIcon} 1x, ${brandIcon} 2x`}
			src={brandIcon}
		/>
	);
};

export default BrandIcon;
