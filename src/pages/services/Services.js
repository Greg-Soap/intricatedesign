import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./Services.scss";
import Rectangle from "../../assets/images/Rectangle.png";
import ServiceImage1 from "../../assets/images/Service Image1.png";
import ServiceImage2 from "../../assets/images/Service Image2.png";
import ServiceImage3 from "../../assets/images/Service Image3.png";
import ServiceImage4 from "../../assets/images/Service Image4.png";
import ServiceImage1_mobile from "../../assets/images/Service Image1_mobile.png";
import ServiceImage2_mobile from "../../assets/images/Service Image2_mobile.png";
import ServiceImage3_mobile from "../../assets/images/Service Image3_mobile.png";
import ServiceImage4_mobile from "../../assets/images/Service Image_mobile.png";

const Services = () => {
	let isPageWide = UseMediaQuery("(min-width: 769px)");

	let services1 = !isPageWide ? ServiceImage1 : ServiceImage1_mobile;
	let services2 = !isPageWide ? ServiceImage2 : ServiceImage2_mobile;
	let services3 = !isPageWide ? ServiceImage3 : ServiceImage3_mobile;
	let services4 = !isPageWide ? ServiceImage4 : ServiceImage4_mobile;

	return (
		<section id="services" className="services_container">
			<div className="services_title_wrapper">
				<div className="services_header">
					<img src={Rectangle} alt="" />
					<h2>WHAT WE OFFER</h2>
				</div>
				<div className="services_title">
					<h1>
						Below are some of the services we offer<span>.</span>
					</h1>
				</div>
			</div>

			<div className="services_content_wrapper">
				<div className="services_content" style={{ backgroundImage: `url("${services1}")` }}>
					<h1 className="services_content_title">Provision of Luxury Designs.</h1>
					<p className="services_content_description">
						We create for you a luxurious and opulent environment suited to your taste. Choosing the right
						furniture, accessories, and finishes to create the luxury interior design of your desire.
					</p>
				</div>
				<div className="services_content" style={{ backgroundImage: `url("${services2}")` }}>
					<h1 className="services_content_title">Curation of high quality designs.</h1>
					<p className="services_content_description">
						We make it our responsibility to choose the best design pieces and select elements of the
						highest standards when carrying out our clients’ projects.
					</p>
				</div>
				<div className="services_content" style={{ backgroundImage: `url("${services3}")` }}>
					<h1 className="services_content_title">Production of custom made pieces.</h1>
					<p className="services_content_description">
						We also produce and distribute high-quality kitchen accessories, custom home furnishings, etc.
					</p>
				</div>
				<div className="services_content" style={{ backgroundImage: `url("${services4}")` }}>
					<h1 className="services_content_title">Totality of services.</h1>
					<p className="services_content_description">
						We offer a whole-house solution for our customers. Intricate Design is a holistic ecosystem
						that can meet all of your needs.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
