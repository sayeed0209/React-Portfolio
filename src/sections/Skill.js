import React from 'react';

const Skill = ({ name, percentage, isVisible }) => {
	const winWidth = window.innerWidth;
	const progressQuery = () => {
		if (winWidth && winWidth > 767) {
			return (
				<div
					className="progress-bar"
					role="progressbar"
					aria-valuemin="0"
					aria-valuemax="100"
					area-valuenow={percentage}
					style={isVisible ? { width: `${percentage}%` } : { width: 0 }}
				></div>
			);
		}
		return (
			<div
				className="progress-bar"
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				area-valuenow={percentage}
				style={{ width: `${percentage}%` }}
			></div>
		);
	};
	return (
		<div className="skill-item">
			<div className="skill-info clearfix">
				<h4 className="float-left mb-3 mt-0">{name}</h4>
				<span className="float-right">{percentage}</span>
			</div>
			<div className="progress">{progressQuery()}</div>
		</div>
	);
};

export default Skill;
