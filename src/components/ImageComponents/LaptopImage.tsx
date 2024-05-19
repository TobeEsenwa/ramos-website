import React from 'react';
import laptop from '../../assets/images/laptop.png';

const LaptopImage: React.FC = () => {
	return (
		<img
			alt="laptop"
			loading="lazy"
			decoding="async"
			className="relative"
			style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
			sizes="100vw"
			srcSet={`${laptop} 640w, ${laptop} 750w, ${laptop} 1080w`}
			src={laptop}
		/>
	);
};

export default LaptopImage;
