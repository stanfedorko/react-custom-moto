import React from 'react';

import cardText from '../../../api/catalog.json'; // Imitate JSON server response

import СatalogItem from './СatalogItem';
import CatalogImage from './CatalogImage';

const CustomStore = () => {

	return (
		<div className="section"  data-aos="fade-up">
			<div className="container">
				<div className="row section-heading justify-content-center mb-5">
					<div className="col-md-8 text-center">
						<h2 className="heading mb-3">MotoCustom</h2>
						<p className="sub-heading mb-5">Sale of motorcycles, accessories. Repair and service.</p>  
					</div>
				</div>
				<div className="row">
					<div className="ftco-46">
						<div className="ftco-46-row d-flex flex-column flex-lg-row">
							<CatalogImage image={'url(images/img_1.jpg)'}/>
							<СatalogItem cardText={cardText[0]}/>
							<CatalogImage image={'url(images/img_2.jpg)'}/>
						</div>

						<div className="ftco-46-row d-flex flex-column flex-lg-row">
							<СatalogItem cardText={cardText[1]}/>
							<CatalogImage image={'url(images/img_3.jpg)'}/>
							<СatalogItem cardText={cardText[2]}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomStore;