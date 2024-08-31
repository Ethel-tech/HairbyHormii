import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonials/Testimonial";
import ContactForm from "../components/Contact Form/ContactForm";
import Footer from "../components/Footer/Footer";

function Home() {
	return (
		<>
			<Navigation />
			<Hero />
			<Services />
			<Testimonial />
			<ContactForm />
			<Footer />
		</>
	);
}

export default Home;
