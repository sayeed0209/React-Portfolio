import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import mainImg from '../assets/img/main-img.jpg';
import {
	
	FaTwitter,
	
	FaHome,
	FaGraduationCap,
} from 'react-icons/fa';
import {
	BsGithub,
	BsFillPersonFill,

	BsFillTelephoneFill,
	BsFillGridFill,
	BsLinkedin,
} from 'react-icons/bs';

const headerData = {
	name: 'Abu Sayeed',
	designation: 'Front End Developer',
	imageThumb: mainImg,
	social: {
		twitter: 'https://twitter.com/abusaye63293191',
		github: 'https://github.com/sayeed0209',
		linkedin: 'https://www.linkedin.com/in/sayeed0209/',
	},
};

function Header({ toggleHeader, handleToggleHeader }) {
	const [currentPath, setCurrentPath] = useState('');
	const match = useLocation();

	useEffect(() => {
		setCurrentPath(match.pathname);
	}, [match.pathname]);
	return (
		<>
			<div
				className={
					toggleHeader
						? 'mobile-header py-2 px-3 mt-4 push'
						: 'mobile-header py-2 px-3 mt-4'
				}
			>
				<button className="menu-icon mr-2" onClick={handleToggleHeader}>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<Link to="/" className="logo">
					<img src={headerData.imageThumb} alt={headerData.name} />
				</Link>
				<Link to="/" className="site-title dot ml-2">
					{headerData.name}
				</Link>
			</div>

			<header
				className={
					toggleHeader
						? 'left float-left shadow-dark open'
						: 'left float-left shadow-dark'
				}
			>
				<button
					type="button"
					className="close btn"
					aria-label="Close"
					onClick={handleToggleHeader}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="header-inner d-flex align-items-start flex-column">
					<div className="aside-nav-img">
						<Link to="/">
							<img src={headerData.imageThumb} alt={headerData.name} />
						</Link>
					</div>
					<Link to="/" className="site-title dot mt-3">
						{headerData.name}
					</Link>

					<span className="site-slogan">{headerData.designation}</span>

					<nav>
						<ul className="vertical-menu scrollspy">
							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-home"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Home
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Home
									</Link>
								)}
							</li>
							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-about"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<BsFillPersonFill />
										</span>
										About
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<BsFillPersonFill />
										</span>
										About
									</Link>
								)}
							</li>

							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-experiences"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<FaGraduationCap />
										</span>
										Resume
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaGraduationCap />
										</span>
										Resume
									</Link>
								)}
							</li>
							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-portfolios"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<BsFillGridFill />
										</span>
										Works
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<BsFillGridFill />
										</span>
										Works
									</Link>
								)}
							</li>

							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-contact"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<BsFillTelephoneFill />
										</span>
										Contact
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<BsFillTelephoneFill />
										</span>
										Contact
									</Link>
								)}
							</li>
						</ul>
					</nav>

					<div className="footer mt-auto">
						<ul className="social-icons list-inline">
							{!headerData.social.twitter ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.twitter}>
										<FaTwitter />
									</a>
								</li>
							)}

							{!headerData.social.linkedin ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.linkedin}>
										<BsLinkedin />
									</a>
								</li>
							)}
							{!headerData.social.github ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.github}>
										<BsGithub />
									</a>
								</li>
							)}
						</ul>

						<span className="copyright">
							&copy; {new Date().getFullYear()} Sayeed
						</span>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
