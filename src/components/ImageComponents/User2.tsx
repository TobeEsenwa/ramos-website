import React from 'react';
import user2 from '../../assets/images/user2.png';

const User2: React.FC = () => {
	return (
		<img
			alt="user-2"
			loading="lazy"
			width="40"
			height="20"
			src={user2}
			srcSet={`${user2} 1x, ${user2} 2x`}
			className="rounded-full"
			style={{ color: 'transparent' }}
		/>
	);
};

export default User2;
