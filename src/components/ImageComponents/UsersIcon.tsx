import React from 'react';
import users from '../../assets/images/users.png';

const UsersIcon: React.FC = () => {
	return (
		<img
			alt="users"
			loading="lazy"
			width="80"
			height="80"
			src={users}
			srcSet={`${users} 1x, ${users} 2x`}
			className="mt-3"
			style={{ color: 'transparent' }}
		/>
	);
};

export default UsersIcon;
