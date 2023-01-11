import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./About.scss";
import ourStory from "../../assets/images/Rectangle 85.png";
import ourStory_mobile from "../../assets/images/Rectangle 85(1).png";
import Badge from "../../assets/images/Badge.png";

const About = () => {
	let isPageWide = UseMediaQuery("(min-width: 769px)");

	return (
		<section id="about" className="about_container">
			<div className="about_wrapper">
				<div className="about_left_content">
					<h2 className="about_header">WHY WE ARE THE BEST, THEN LIST VALUES</h2>
					<h1 className="about_title">
						We are <span>Intricate Design</span> spaces.
					</h1>
					<div className="about_body">
						<p>
							<span className="dot" /> INTRICATE DESIGN is an interior design and decor company located in
							West Africa, Nigeria. At Intricate Design, we believe that our clients deserve the best life
							has to offer; that is exactly what we aim to deliver; the best
						</p>
						<p>
							<span className="dot" /> By providing first-class luxury solutions for homes, offices,
							hotels, etc. Implementing creative and innovative methods to meet your needs to absolute
							perfection.
						</p>
						<p>
							<span className="dot" /> By providing first-class luxury solutions for homes, offices,
							hotels, etc. Implementing creative and innovative methods to meet your needs to absolute
							perfection.
						</p>
					</div>
				</div>
				<div className="about_right_content">
					{isPageWide ? (
						<div className="wrapper">
							<img src={Badge} alt="" className="Badge" />
							<img className="about_img" src={ourStory} alt="ourStory" />
						</div>
					) : (
						<div className="wrapper">
							<img src={Badge} alt="" className="Badge" />
							<img className="about_img_mobile" src={ourStory_mobile} alt="ourStory" />
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
