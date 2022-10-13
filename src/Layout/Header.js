import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import mainImg from '../assets/img/main-img.jpg';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaDribbble,
	FaHome,
} from 'react-icons/fa';

const headerData = {
	name: 'Abu Sayeed',
	designation: 'Front End Developer',
	imageThumb: mainImg,
	social: {
		facebook: 'https://facebook.com',
		twitter: 'https://twitter.com',
		instagram: 'https://www.instagram.com/',
		youtue: 'https://www.youtube.com/',
		dribbble: 'https://dribbble.com/',
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
					className="close"
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
											<FaHome />
										</span>
										About
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
										</span>
										About
									</Link>
								)}
							</li>
							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-services"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Services
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Services
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
											<FaHome />
										</span>
										Resume
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
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
											<FaHome />
										</span>
										Works
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Works
									</Link>
								)}
							</li>
							<li>
								{currentPath === '/' ? (
									<ScrollLink
										activeClass="active"
										to="section-blogs"
										spy={true}
										smooth={true}
										offset={-50}
										duration={500}
									>
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Blog
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Blog
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
											<FaHome />
										</span>
										Contact
									</ScrollLink>
								) : (
									<Link to="/">
										<span className="icon nav-icon">
											<FaHome />
										</span>
										Contact
									</Link>
								)}
							</li>
						</ul>
					</nav>

					<div className="footer mt-auto">
						<ul className="social-icons list-inline">
							{!headerData.social.facebook ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.facebook}>
										<FaFacebookF />
									</a>
								</li>
							)}
							{!headerData.social.twitter ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.twitter}>
										<FaTwitter />
									</a>
								</li>
							)}
							{!headerData.social.instagram ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.instagram}>
										<FaInstagram />
									</a>
								</li>
							)}
							{!headerData.social.youtue ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.youtue}>
										<FaYoutube />
									</a>
								</li>
							)}
							{!headerData.social.dribbble ? null : (
								<li className="list-inline-item">
									<a href={headerData.social.dribbble}>
										<FaDribbble />
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
