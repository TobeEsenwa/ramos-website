import React from 'react';
import smallLaptop from '../../assets/images/small-laptop.png';

const SmallLaptopImage: React.FC = () => {
	return (
		<img
			alt="small laptop"
			loading="lazy"
			width="400"
			height="400"
			src={smallLaptop}
		/>
	);
};

export default SmallLaptopImage;
