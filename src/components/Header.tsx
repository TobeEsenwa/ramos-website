import React from 'react';
import BrandIcon from './ImageComponents/BrandIcon';

const Header: React.FC = () => {
	return (
		<header className="bg-[--primary-color] text-white rounded-2xl p-2 mx-3 mt-3 flex justify-between items-center shadow-md">
			<div className=" flex items-center flex-row">
				<BrandIcon />
				<span className="text-2xl ml-3 font-bold">
					ramos
				</span>
			</div>
			<nav className="bg-[#252525] rounded-[1.3em] h-full p-4 flex gap-10 space-x-4">
				<a href="#dashboard" className="text-sm text-white hover:text-[--secondary-color] transition-colors duration-300">Dashboard</a>
				<a href="#reports" className="text-sm text-white hover:text-[--secondary-color] transition-colors duration-300">Reports</a>
				<a href="#documents" className="text-sm text-white hover:text-[--secondary-color] transition-colors duration-300">Documents</a>
				<a href="#history" className="text-sm text-white hover:text-[--secondary-color] transition-colors duration-300">History</a>
				<a href="#settings" className="text-sm text-white hover:text-[--secondary-color] transition-colors duration-300">Settings</a>
			</nav>
			<button className="bg-[--background-color] h-full rounded-xl text-[--primary-color] py-3 px-6 hoer:bg-[--secondary-color] transition-colors duration-300">
				Sign Up
			</button>
		</header>
	);
};

export default Header;
