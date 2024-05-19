import React from 'react';
import qrCode from '../../assets/images/qr-code.png';

const QrCode: React.FC = () => {
	return (
		<img
			alt="qrCode"
			loading="lazy"
			decoding="async"
			width="80"
			height="80"
			src={qrCode}
			className="mx-auto md:mx-0"
		/>
	);
};

export default QrCode;
