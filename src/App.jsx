import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookingPage from "./Pages/BookingPage";
import Gallery from "./Pages/Gallery";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/booking" element={<BookingPage />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>
		</>
	);
}

export default App;
