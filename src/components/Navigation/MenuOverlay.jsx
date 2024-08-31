import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

function MenuOverlay({ navbarOpen, setNavbarOpen }) {
	return (
		<nav
			className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-[#fcbcb2] transform delay-100 transition-all duration-300 ${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			}`}
		>
			<ul className="flex flex-col items-start">
				<li className="nav-li flex w-full list-none focus:outline-none group py-2 tracking-normal hover:font-semibold transition-all duration-200 ease-in-out">
					<Link
						href="/"
						className="nav-link h-full w-full text-xl text-black"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Home
					</Link>
				</li>
				<li className="nav-li flex w-full list-none focus:outline-none group py-2 tracking-normal hover:font-semibold transition-all duration-200 ease-in-out">
					<Link
						to="/gallery"
						className="nav-link h-full w-full text-xl text-black"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Gallery
					</Link>
				</li>
				<li
					className="nav-li flex w-full list-none focus:outline-none group py-2 tracking-normal 
				  hover:font-semibold transition-all duration-200 ease-in-out"
				>
					<Link
						href="/"
						className="nav-link h-full w-full text-xl text-black"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Contact
					</Link>
				</li>
				<li className="mt-10">
					<Link to="/booking">
						<CustomButton txt="Booking" bgCol="#31353d" txtCol="white" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default MenuOverlay;
