import React, { useState } from 'react';
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaPaperPlane,
} from 'react-icons/fa';
const contactData = {
	phone: ['+34 612 207 931'],
	email: ['sayeed0209@gmail.com'],
	location: 'Calle Sepulveda, Barcelona',
};

const Contact = () => {
	const [fromData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = event => {
		setFormData({
			...fromData,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	return (
		<div className="row">
			<div className="col-md-4 mb-4 mb-md-0">
				<div className="contact-info mb-5">
					<div className="details">
						<h5>
							<span className="form-icon icon">
								<FaPhoneAlt />
							</span>
							Phone
						</h5>
						{contactData.phone.map((singlePhone, index) => (
							<span key={index}>{singlePhone}</span>
						))}
					</div>
				</div>
				<div className="contact-info mb-5">
					<div className="details">
						<h5>
							<span className="form-icon icon">
								<FaEnvelope />
							</span>
							Email address
						</h5>
						{contactData.email.map((singleEmail, index) => (
							<span key={index}>{singleEmail}</span>
						))}
					</div>
				</div>
				<div className="contact-info">
					<div className="details">
						<h5>
							<span className="form-icon icon">
								<FaMapMarkerAlt />
							</span>
							Location
						</h5>
						<span>{contactData.location}</span>
					</div>
				</div>
			</div>

			<div className="col-md-8">
				<form
					className="contact-form"
					action={process.env.REACT_APP_FORM_ENDPOINT}
					method="POST"
				>
					<div className="row">
						<div className="column col-md-6">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="name"
									placeholder="Your name"
									onChange={handleChange}
									value={fromData.name}
								/>
							</div>
						</div>

						<div className="column col-md-6">
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="Email address"
									onChange={handleChange}
									value={fromData.email}
								/>
							</div>
						</div>

						<div className="column col-md-12">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="subject"
									placeholder="Subject"
									onChange={handleChange}
									value={fromData.subject}
								/>
							</div>
						</div>

						<div className="column col-md-12">
							<div className="form-group">
								<textarea
									name="message"
									className="form-control"
									rows="5"
									placeholder="Message"
									onChange={handleChange}
									value={fromData.message}
								></textarea>
							</div>
						</div>
					</div>

					<button
						type="submit"
						name="submit"
						value="Submit"
						className="btn btn-default"
					>
						<span className="icon">
							<FaPaperPlane />
						</span>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
