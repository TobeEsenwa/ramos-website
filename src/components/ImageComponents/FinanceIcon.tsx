import React from 'react';
import financeIcon from '../../assets/images/finance-icon.png';

const FinanceIcon: React.FC = () => {
	return (
		<img
			alt="link-bar-icon"
			loading="lazy"
			width="15"
			height="15"
			src={financeIcon}
			srcSet={`${financeIcon} 1x, ${financeIcon} 2x`}
			className="rounded-full"
			style={{ color: 'transparent' }}
		/>
	);
};

export default FinanceIcon;
