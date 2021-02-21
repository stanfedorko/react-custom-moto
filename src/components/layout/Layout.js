import React from 'react';

const Layout = (props) => {
	return(
		<div className="site-wrap">
			{props.children}
		</div>
	);
};

export default Layout;