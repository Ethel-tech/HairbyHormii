import React from "react";
import Booking from "../components/Booking/Booking";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Quote from "../components/Quote/Quote";

function BookingPage() {
	return (
		<>
			<Navigation />
			<Booking />
			<Quote />
			<Footer />
		</>
	);
}

export default BookingPage;
