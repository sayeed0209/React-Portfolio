import React from 'react';
import TrackVisibility from 'react-on-screen';
import Skill from './Skill';
const skillData = {
	skillContent:
		'I am a self-driven front-end developer and have been in the industry for more than 2 years. I have a keen eye for detail and most of my working life has been dedicated to creating stunning websites for clients. In addition, I have also received an Assembler Institute of Technology Full-Stack Web Development Training Certification in 2019. I used my knowledge of JavaScript to spearhead the development of the Ideable responsive web application for my previous company, which improved the  mobile user experience and increased customer retention on mobile devices by over 50%.',
	progressData: [
		{
			id: 1,
			name: 'Javascript',
			percentage: 95,
		},
		{
			id: 2,
			name: 'React',
			percentage: 96,
		},
		{
			id: 3,
			name: 'jQuery',
			percentage: 80,
		},
		{
			id: 4,
			name: 'HTML5 | CSS3 | SASS',
			percentage: 70,
		},
		{
			id: 5,
			name: 'Wordpress',
			percentage: 85,
		},
		{
			id: 6,
			name: 'BootStrap',
			percentage: 95,
		},
	],
};
const Skills = () => {
	return (
		<>
			<p className="mb-0">{skillData.skillContent}</p>
			<div className="mt-5">
				<div className="row -mt-50">
					{skillData.progressData.map(item => {
						return (
							<div className="col-md-6 mt-50 " key={item.id}>
								<TrackVisibility once>
									<Skill {...item} />
								</TrackVisibility>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Skills;
