import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Layout from '../Layout/Layout';
import HeroSection from '../sections/HeroSection';
import SectionHeading from '../sections/SectionHeading';
import Skills from '../sections/Skills';
import Experiences from '../sections/Experiences';
import Portfolios from '../sections/Portfolios';
import Contact from '../sections/Contact';
import About from './About';

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layout>
			<Element name="section-home">
				<HeroSection />
			</Element>
			<Element name="section-about">
				<section className="shadow-blue white-bg padding">
					<SectionHeading title="About Me" />
					<About />
				</section>
			</Element>
			<Element>
				<section className="shadow-blue white-bg padding">
					<SectionHeading title="My skills" />
					<Skills />
				</section>
			</Element>
			<Element name="section-experiences">
				<section className="shadow-blue white-bg padding">
					<SectionHeading title="Experience & Education" />
					<Experiences />
				</section>
			</Element>
			<Element name="section-portfolios">
				<section className="shadow-blue white-bg padding">
					<SectionHeading title="Portfolio" />
					<Portfolios />
				</section>
			</Element>
			<Element name="section-contact">
				<section className="shadow-blue white-bg padding">
					<SectionHeading title="Get in touch" />
					<Contact />
				</section>
			</Element>
		</Layout>
	);
};

export default Homepage;
