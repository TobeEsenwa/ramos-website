import React from 'react';
import CustomerServiceCard from './CustomerServiceCard';
import KeyIndicatorsCard from './KeyIndicatorsCard';
import Header from './Header';

const ControlSection: React.FC = () => {
	return (
		<section className="max-w-[1300px] mx-auto p-10">
			<Header />
			<div className="w-full relative">
				<div className="flex gap-4 justify-center items-center">
					<CustomerServiceCard />
					<KeyIndicatorsCard />
				</div>
			</div>
		</section>
	);
};

export default ControlSection;
