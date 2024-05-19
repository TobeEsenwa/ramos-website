import React from 'react';
import {StaggeringAnimatedText} from '../../assets/misc/StaggeringAnimatedText';

const Header: React.FC = () => {
	return (
		<h1 className="text-black text-[110px] leading-[130px] py-10 mb-6 font-medium">
	      <StaggeringAnimatedText text="We" />
	      <StaggeringAnimatedText text="give" />
	      <StaggeringAnimatedText text="you" />
	      <StaggeringAnimatedText text="full" />
	      <br />
	      <StaggeringAnimatedText
		      text="control"
		      className="text-[#CCCCCC]"
	      />
			<StaggeringAnimatedText text="over" />
			<StaggeringAnimatedText text="your" />
			<StaggeringAnimatedText text="data" />
		</h1>
	);
};

export default Header;
