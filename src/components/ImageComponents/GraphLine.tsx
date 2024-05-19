import React from 'react';
import graphLine from '../../assets/images/graph-line.png';

const GraphLine: React.FC = () => {
	return (
		<img
			alt="graph-line"
			loading="lazy"
			width="150"
			height="100"
			decoding="async"
			className="rounded-full"
			style={{color: 'transparent'}}
			srcSet={`${graphLine} 1x, ${graphLine} 2x`}
			src={graphLine}
		/>
	);
};

export default GraphLine;
