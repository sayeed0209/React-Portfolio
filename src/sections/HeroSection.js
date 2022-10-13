import React from 'react';
import { BsFillGrid1X2Fill, BsFillEnvelopeFill } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import hero_img from '../assets/img/hero-img.jpg';
const heroSectionData = {
	name: 'Abu Sayeed',
	aboutMe: `I am a Front-end developer.
	My primary focus on writing
	clean, elegant and efficient
	code. Seeking position in a
	company that appreciates
	hard work, dedication and
	evolving technical skills.`,
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
				<h1 className="mt-0 mb-4">I'm {heroSectionData.name}</h1>
				<span className="dot"></span>
				<p className="mb-4">{heroSectionData.aboutMe}</p>
				<ScrollLink
					activeClass="active"
					to="section-portfolios"
					spy={true}
					smooth={true}
					duration={500}
					offset={50}
					className="btn btn-default btn-lg mr-3 hero-btn"
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
