import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import logo from "../../assets/image/logo-no-bg.png";
import { Link } from "react-router-dom";

function Header({ navbarOpen, setNavbarOpen }) {
	return (
		<nav className="bg-[#31353d] text-[#ffffff] w-full h-24 flex">
			<div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 ">
				<div className="flex-grow z-20">
					<Link
						to="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img className="w-28 h-auto" src={logo} alt="logo" />
					</Link>
				</div>
				<div
					className="hidden w-full md:block md:w-auto mr-8"
					id="navbar-multi-level"
				>
					<ul className="flex flex-col font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
						<Link to="/">
							<li>Home</li>
						</Link>

						<Link to="/gallery">
							<li>Gallery</li>
						</Link>
					</ul>
				</div>
				<div className="flex gap-7 hidden md:block">
					<CustomButton txt="Book Now" bgCol="#FCBCB2" txtCol="#ffffff" />
				</div>
				<button
					className="md:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-[#fcbcb2] focus:outline-none"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
						<span
							className={`absolute bg-[#fcbcb2] h-0.5 w-5 transform transition duration-300 ease-in-out ${
								navbarOpen
									? "rotate-45 delay-200 bg-[#fff]"
									: "-translate-y-1.5"
							}`}
						></span>
						<span
							className={`absolute bg-[#fcbcb2] h-0.5 transform transition-all duration-200 ease-in-out ${
								navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
							}`}
						></span>
						<span
							className={`absolute bg-[#fcbcb2] h-0.5 w-5 transform transition duration-300 ease-in-out ${
								navbarOpen
									? "-rotate-45 delay-200 bg-[#fff]"
									: "translate-y-1.5"
							}`}
						></span>
					</div>
				</button>
			</div>
		</nav>
	);
}

export default Header;
