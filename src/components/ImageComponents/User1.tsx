import React from 'react';
import user1 from '../../assets/images/user1.png';

const User1: React.FC = () => {
	return (
		<img
			alt="user-1"
			loading="lazy"
			width="40"
			height="20"
			src={user1}
			srcSet={`${user1} 1x, ${user1} 2x`}
			className="rounded-full"
			style={{ color: 'transparent' }}
		/>
	);
};

export default User1;
