import React from 'react';
import Header from './Header';
import EfficiencyContent from './EfficiencyContent';
import Description from './Description';
import ActionButtons from '../Buttons/ActionButtons';

const MaximizeEfficiency: React.FC = () => {
	return (
		<section className="bg-white p-10">
			<div className="max-w-[1300px] mx-auto">
				<Header />
				<EfficiencyContent />
				<hr className="my-14" />
				<div className="flex justify-between items-center mt-10">
					<Description />
					<ActionButtons />
				</div>
			</div>
		</section>
	);
};

export default MaximizeEfficiency;
