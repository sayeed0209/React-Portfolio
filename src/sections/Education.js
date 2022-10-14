import React from 'react';

const Education = ({ year, degree, content }) => {
	return (
		<div className="entry">
			<div className="title">
				<span>{year}</span>
			</div>
			<div className="body">
				<h4 className="mt-0">{degree}</h4>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Education;
