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
				<li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
					<a
						href="/"
						className="nav-link h-full w-full py-2 text-lg text-black"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Home
					</a>
				</li>
				<li className="nav-li">
					<Link
						to="/gallery"
						className="nav-link h-full w-full py-2 text-lg text-black"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Gallery
					</Link>
				</li>
				<li className="nav-li">
					<Link
						href="/"
						className="nav-link h-full w-full py-2 text-lg text-black"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						Contact
					</Link>
				</li>
				<div className="flex gap-10 mt-10">
					<Link to="/sign-up">
						<CustomButton
							btnText="Sign Up"
							bgColor="#85C1E9"
							txtColor="white"
						/>
					</Link>
				</div>
			</ul>
		</nav>
	);
}

export default MenuOverlay;
