import React from 'react';

const СatalogItem = ({ cardText }) => {
	
	// destructure from props
	const { category, name, text } = cardText;

	return (
		<div className="ftco-46-text">
			<h4 className="ftco-46-subheading">{category}</h4>
			<h3 className="ftco-46-heading">{name}</h3>
			<p className="mb-5">{text}</p>
			<p><a href="#" className="btn-link">Learn More <span className="ion-android-arrow-forward"></span></a></p>
		</div>
	);
};

export default СatalogItem;
