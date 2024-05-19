import React from 'react';
import playIcon from '../../assets/images/play-icon.png';

const PlayIcon: React.FC = () => {
	return (
		<img
			alt="play-icon"
			loading="lazy"
			width="30"
			height="30"
			src={playIcon}
		/>
	);
};

export default PlayIcon;
