import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import mainImg from '../assets/img/main-img.jpg';
import { BsCloudDownloadFill, BsFillEnvelopeFill } from 'react-icons/bs';
const aboutData = {
	cvpath: 'media/empty.pdf',
	image: mainImg,
	name: 'Abu Sayeed',
	location: 'Barcelona, Spain',
	email: 'sayeed0209@gmail.com',
	phone:'+34 612 207  931',
	aboutMe:
		'I am a Front-end developer. My primary focus on writing clean, elegant and efficient code. Seeking position in a company that appreciates hard work, dedication and evolving technical skills.',
};

function About() {
	return (
		<div className="row">
			<div className="col-md-3">
				<img src={aboutData.image} alt={aboutData.name} />
			</div>
			<div className="col-md-9">
				<h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
				<p className="mb-0">{aboutData.aboutMe}</p>
				<div className="row my-4">
					<div className="col-md-6">
						<p className="mb-2">
							Name: <span className="text-dark">{aboutData.name}</span>
						</p>
						<p className="mb-0">
							Phone: <span className="text-dark">{aboutData.phone}</span>
						</p>
					</div>
					<div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
						<p className="mb-2">
							Location: <span className="text-dark">{aboutData.location}</span>
						</p>
						<p className="mb-0">
							Email: <span className="text-dark">{aboutData.email}</span>
						</p>
					</div>
				</div>
				<a href={aboutData.cvpath} className="btn btn-default mr-3 btn-spacer">
					Download CV <BsCloudDownloadFill />
				</a>
				<ScrollLink
					activeClass="active"
					to="section-contact"
					spy={true}
					smooth={true}
					duration={500}
					offset={50}
					className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
				>
					Hire me <BsFillEnvelopeFill />
				</ScrollLink>
			</div>
		</div>
	);
}

export default About;
