import React from 'react';

const Portfolio = ({ name, category, image, url }) => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<div className="portfolio-item">
				<div className="details">
					<h4 className="title">{name}</h4>
					<span className="term">{category}</span>
				</div>
				<span className="plus-icon">+</span>
				<div className="thumb">
					<img src={image} alt={name} />
					<div className="mask"></div>
				</div>
			</div>
		</a>
	);
};

export default Portfolio;
