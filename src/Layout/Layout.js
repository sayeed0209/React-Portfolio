import React, { useState } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
	const [toggleHeader, setToggleHeader] = useState(false);
	const handleToggleHeader = () => {
		setToggleHeader(!toggleHeader);
	};
	return (
		<div className="site-wrapper">
			<Header
				toggleHeader={toggleHeader}
				handleToggleHeader={handleToggleHeader}
			/>
			<main
				className={
					toggleHeader ? 'content float-right push' : 'content float-right'
				}
			>
				{children}
			</main>
		</div>
	);
};

export default Layout;
