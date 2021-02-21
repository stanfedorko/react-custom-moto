import React from 'react';

import Layout from '../layout/Layout';

// Components
import CustomStore from '../sections/CustomStore/CustomStore';
import MotoClub from '../sections/MotoClub/MotoClub';
import MeetFounders from '../sections/MeetFounders/MeetFounders';

const Home = () => {

	return(
		<Layout>
			<div className="main-wrap " id="-home">
				<CustomStore />
				<MotoClub />
				<MeetFounders />
			</div>
		</Layout>
	);

};

export default Home;