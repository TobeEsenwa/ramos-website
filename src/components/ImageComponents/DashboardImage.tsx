import React from 'react';
import dashboard from '../../assets/images/dashboard.png';

const DashboardImage: React.FC = () => {
	return (
		<img
			alt="dashboard"
			loading="lazy"
			decoding="async"
			className="absolute left-[50px] top-0 rounded-3xl"
			style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'contain', color: 'transparent' }}
			sizes="100vw"
			srcSet={`${dashboard} 640w, ${dashboard} 750w, ${dashboard} 1080w`}
			src={dashboard}
		/>
	);
};

export default DashboardImage;
