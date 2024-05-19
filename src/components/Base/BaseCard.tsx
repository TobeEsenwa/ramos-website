import React from 'react';

interface BaseCardProps {
	children: React.ReactNode;
	className?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className = '' }) => {
	return (
		<div className={`relative bg-white shadow-md border border-gray-200 overflow-hidden ${className}`}>
				{children}
		</div>
	);
};

export default BaseCard;
