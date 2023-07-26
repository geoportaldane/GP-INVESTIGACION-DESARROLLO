import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '../../styles/banner.scss';


function Banner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<section className="slider">
			<Slider {...settings}>
					<div className="slide-item">
					<img src='https://geoportal.dane.gov.co/src/images/git/home/githomeprincipal-desktop-0001.svg' alt={`Image banner con título Investigación y Desarrollo`} />
				</div>
			</Slider>
		</section>
	)
}


export default Banner;
