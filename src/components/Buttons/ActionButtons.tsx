import React from 'react';

const ActionButtons: React.FC = () => {
	return (
		<div className="flex items-center gap-2">
			<button className="bg-[--on-background-color] text-black text-xs rounded-md py-3 px-8" style={{ transform: 'none' }}>
				Request a demo
			</button>
			<button className="bg-[--accent-color] text-white text-xs rounded-md py-3 px-8" style={{ transform: 'none' }}>
				Start for free
			</button>
		</div>
	);
};

export default ActionButtons;
