import React from 'react';

const Founder = ({ founder }) => {
	
	// destructure from props
	const { name, position, image, text1, text2 } = founder;

	return (
		<div className="ftco-38">
			<div className="ftco-38-img">
				<div className="ftco-38-header">
					<img src={image} alt="Image" />
					<h3 className="ftco-38-heading">{name}</h3>
					<p className="ftco-38-subheading">{position}</p>
				</div>
				<div className="ftco-38-body">
					<p>{text1}</p>
					<p>{text2}</p>
					<p>
						<a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
						<a href="#" className="p-2"><span className="fa fa-twitter"></span></a>
						<a href="#" className="p-2"><span className="fa fa-instagram"></span></a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Founder;




