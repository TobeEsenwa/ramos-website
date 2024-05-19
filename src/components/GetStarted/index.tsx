import React from 'react';
import GetStartedHeading from './GetStartedHeading';
import GetStartedText from './GetStartedText';
import ActionButtons from '../Buttons/ActionButtons';
import LinkBarIcon from '../ImageComponents/LinkBarIcon';
import RamosIcon from '../ImageComponents/RamosIcon';

const SectionContainer: React.FC = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-10 my-20">
			<div className="relative bg-[--accent-color] rounded-[35px] h-[95px] w-[95px] flex justify-center items-center">
				<RamosIcon />
			</div>
			<GetStartedHeading />
			<GetStartedText />
			<ActionButtons />
		</section>
	);
};

export default SectionContainer;
