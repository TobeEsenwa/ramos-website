import React from 'react';
import threeLines from '../../assets/images/three-lines.png';

const ThreeLines: React.FC = () => {
	return (
		<img
			alt="three-lines"
			loading="lazy"
			width="60"
			height="60"
			src={threeLines}
		/>
	);
};

export default ThreeLines;
