import React from 'react';

const Experience = ({ year, company, role }) => {
	return (
		<div className="entry">
			<div className="title">
				<span>{year}</span>
			</div>
			<div className="body">
				<h4 className="mt-0">{company}</h4>
				<p>{role}</p>
			</div>
		</div>
	);
};

export default Experience;
