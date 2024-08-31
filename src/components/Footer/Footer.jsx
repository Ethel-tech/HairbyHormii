import React from "react";
import logo from "../../assets/image/logo-nobg.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons/faSnapchat";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
	return (
		<footer className="bg-[#fcbcb2] dark:bg-gray-900">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<Link
						href="/"
						className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
					>
						<img src={logo} className="h-16" alt="Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							HairbyHormii
						</span>
					</Link>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#31353d] sm:mb-0 dark:text-[#31353d]">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6 ">
								<FontAwesomeIcon icon={faTiktok} />
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								<FontAwesomeIcon icon={faSnapchat} />
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-[#31353d] sm:text-center dark:text-gray-400">
					<FontAwesomeIcon icon={faCopyright} /> 2024
					<Link href="/" className="hover:underline">
						HairbyHormii
					</Link>
					. All Rights Reserved.
				</span>
				<span>
					<a href="https://ethel-tech.netlify.app/">Made by Ethel</a>
				</span>
			</div>
		</footer>
	);
}

export default Footer;
