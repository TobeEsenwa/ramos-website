import React from 'react';
import {StaggeringAnimatedText} from '../../assets/misc/StaggeringAnimatedText';

const GetStartedHeading: React.FC = () => {
	return (
		<h2>
			<span className="text-black text-[85px] leading-[70px] overflow-y-hidden inline-flex" style={{ whiteSpace: 'nowrap' }}>
				<StaggeringAnimatedText text="Get" />
				<StaggeringAnimatedText text="Started" />
			</span>
		</h2>
	);
};

export default GetStartedHeading;
