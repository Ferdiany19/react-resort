import React, { Component } from 'react';
import Title from './Title';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
	state = {
		services: [
		{
			icon: <FaCocktail />,
			title: "Free Cocktails",
			info: 'lorem ipssum sit amteet jja nnx xnzmmannsmmznx  xjnjansanasj'
		},
		{
			icon: <FaHiking />,
			title: "Endless Hiking",
			info: 'lorem ipssum sit amteet jja nnx xnzmmannsmmznx  xjnjansanasj'
		},
		{
			icon: <FaShuttleVan />,
			title: "Free Shuttle",
			info: 'lorem ipssum sit amteet jja nnx xnzmmannsmmznx  xjnjansanasj'
		},
		{
			icon: <FaBeer />,
			title: "Free Beer",
			info: 'lorem ipssum sit amteet jja nnx xnzmmannsmmznx  xjnjansanasj'
		}
	  ]
	};

	render() {
		return (
			<section className="services">
				<Title title='services' />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return ( 	
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>	
						 );
					})}
				</div>
			</section>
		);
	}
} 

export default Services;