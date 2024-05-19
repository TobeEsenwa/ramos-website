import React from 'react';
import {StaggeringAnimatedText} from '../../assets/misc/StaggeringAnimatedText';

const Header: React.FC = () => {
	return (
		<h1 className="text-[105px] leading-[110px] font-medium tracking-tight text-gray-900 mb-4">
			<StaggeringAnimatedText text="Maximize" />
			<StaggeringAnimatedText text="efficiency" className="text-[#CCCCCC]" />
			<br />
			<StaggeringAnimatedText text="with" />
			<StaggeringAnimatedText text="our" />
			<StaggeringAnimatedText text="intuitive" />
		</h1>
	);
};

export default Header;
