import React, { useState } from "react";
import Header from "./Header";
import MenuOverlay from "./MenuOverlay";

function Navigation() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="w-full z-20 fixed">
			<Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
		</nav>
	);
}

export default Navigation;
