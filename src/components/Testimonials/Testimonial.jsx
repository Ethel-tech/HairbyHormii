import React, { useState } from "react";
import "./testimonial.scss";
import testimonialData from "./TestimonialData";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handlePrevious = () => {
		const newIndex =
			currentIndex === 0 ? testimonialData.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const handleNext = () => {
		const newIndex =
			currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const { name, testimonial, avatar } = testimonialData[currentIndex];

	return (
		<section className="py-20 bg-[#A06054]">
			<div className="testimonial-slider">
				<button className="slider-button left" onClick={handlePrevious}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<div className="testimonial-content px-10 lg:px-24">
					<img src={avatar} alt={name} className="avatar" />
					<p className="testimonial">{testimonial}</p>
					<h3 className="name">{name}</h3>
				</div>
				<button className="slider-button right" onClick={handleNext}>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</section>
	);
}

export default Testimonial;
