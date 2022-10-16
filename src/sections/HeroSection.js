import React from 'react';
import { BsFillGrid1X2Fill, BsFillEnvelopeFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import { Link as ScrollLink } from 'react-scroll';
import hero_img from '../assets/img/hero-img.jpg';
const heroSectionData = {
	name: ' Abu Sayeed',
	aboutMe: `I am a self-driven front-end developer and have been in the industry for more than 2 years. I have a keen eye for detail and most of my working life has been dedicated to creating stunning websites for clients.`,
};
const HeroSection = () => {
	return (
		<section
			className=" hero parallax  d-flex align-items-center shadow-dark"
			style={{
				backgroundImage: `url(${hero_img})`,
			}}
		>
			<div className="cta max-auto mt-2">
				<h1 className="mt-0 mb-4">
					<Typewriter
						options={{
							strings: "I'm " + heroSectionData.name.split(' ').join(''),
							autoStart: true,
							loop: true,
							delay: 120,
						}}
					/>
				</h1>
				<span className="dot"></span>
				<p className="mb-4">{heroSectionData.aboutMe}</p>
				<ScrollLink
					activeClass="active"
					to="section-portfolios"
					spy={true}
					smooth={true}
					duration={500}
					offset={50}
					className="btn btn-default btn-lg mr-3 btn-spacer"
				>
					View Portfolio
					<BsFillGrid1X2Fill />
				</ScrollLink>
				<div
					className="spacer d-md-none d-lg-none d-sm-none"
					data-height="10"
				></div>
				<ScrollLink
					activeClass="active"
					to="section-contact"
					spy={true}
					smooth={true}
					duration={500}
					offset={50}
					className="btn btn-border-light btn-lg"
				>
					Hire Me
					<BsFillEnvelopeFill />
				</ScrollLink>
			</div>
		</section>
	);
};

export default HeroSection;
