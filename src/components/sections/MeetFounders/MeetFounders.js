import React from 'react';

import founders from '../../../api/founders.json'; // Imitate JSON server response

import Founder from './Founder';

const MeetFounders = () => {

	return (
		<div className="section" data-aos="fade-up">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-12 section-heading text-center">
						<h2 className="heading mb-4">Founders</h2>
					</div>
				</div>
				<div className="row">
					{founders.map(founder => 
						<div className="col-md-6 pr-md-5 text-center mb-5">
							<Founder founder={founder}/>
						</div>
					)}
				</div>
			</div>
		</div> 
	);
};

export default MeetFounders;
