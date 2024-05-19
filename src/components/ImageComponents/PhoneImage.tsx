import React from 'react';
import phone from '../../assets/images/phone.png';

const PhoneImage: React.FC = () => {
	return (
		<img
			alt="phone"
			loading="lazy"
			width="290"
			height="290"
			decoding="async"
			className="relative left-[100px] top-0"
			style={{ color: 'transparent' }}
			src={phone}
			srcSet={`${phone} 1x, ${phone} 2x`}
		/>
	);
};

export default PhoneImage;
