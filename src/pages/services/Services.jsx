import React from "react";
import "./Services.scss";
import Service1 from "../../assets/images/Rectangle 59.png";
import Service2 from "../../assets/images/Rectangle 63.png";
import Service3 from "../../assets/images/Rectangle 64.png";
import Service4 from "../../assets/images/Rectangle 65.png";
const Services = () => {
	return (
		<section id="services" className="services_container">
			<div className="services_title_wrapper">
				<h2 className="services_header">WHAT WE OFFER</h2>
				<h1 className="services_title">
					Below are some of the <span>services</span> we offer.
				</h1>
			</div>

			<div className="services_content_wrapper">
				<div className="services_content">
					<img src={Service1} alt="" />
				</div>
				<div className="services_content">
					<img src={Service2} alt="" />
				</div>
				<div className="services_content">
					<img src={Service3} alt="" />
				</div>
				<div className="services_content">
					<img src={Service4} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Services;
