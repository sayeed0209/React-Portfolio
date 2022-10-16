import React from 'react';
import Education from './Education';
import Experience from './Experience';
const educationData = [
	{
		id: 1,
		year: '2019 - Present',
		degree: 'Bachelor’s Degree',
		content:
			'Techniques for Software Application Development - Universitat Oberta de Catalunya(UOC).',
	},
	{
		id: 2,
		year: '2020',
		degree: 'Full-Stack Web Development',
		content:
			'Assembler Institute of Technology Full-Stack Web Development Training Certification in 2019.',
	},
	{
		id: 3,
		year: '2021',
		degree: 'NodeJs BootCamp',
		content: 'IT Academy (Barcelona Activa).',
	},
	{
		id: 4,
		year: '2007 - 2013',
		degree: 'Bachelor’s Degree In Economics',
		content: 'National University of Bangladesh.',
	},
];
const experiencesData = [
	{
		id: 1,
		year: '2020 - 2022',
		company: 'NATANEK IBERIA S.L',
		role: 'Front end developer',
	},
	{
		id: 2,
		year: '2022 - Present ',
		company: 'MEJOR CON PUBLICIDAD S.L',
		role: 'Front end developer',
	},
];
const Experiences = () => {
	return (
		<div className="timeline">
			{experiencesData.map(ex => (
				<Experience {...ex} key={ex.id} />
			))}
			
			{educationData.map(ex => (
				<Education {...ex} key={ex.id} />
			))}
			<span className="timeline-line"></span>
			
		</div>
	);
};

export default Experiences;
