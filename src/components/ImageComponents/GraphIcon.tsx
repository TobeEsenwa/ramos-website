import React from 'react';
import graph from '../../assets/images/graph.png';

const GraphIcon: React.FC = () => {
	return (
		<img
			alt="graph"
			loading="lazy"
			width="270"
			height="270"
			src={graph}
			srcSet={`${graph} 1x, ${graph} 2x`}
			style={{ color: 'transparent' }}
		/>
	);
};

export default GraphIcon;
