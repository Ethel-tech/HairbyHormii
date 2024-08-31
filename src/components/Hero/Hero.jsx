import React from "react";
import lady from "../../assets/image/lady.png";
import CustomButton from "../CustomButton/CustomButton";
import "./hero.scss";

function Hero() {
	return (
		<section className="hero h-full text-[#09223E] text-base">
			<div className="flex gap-32 some">
				<div className="w-2/4 mt-16 flex justify-center self-center">
					<div className="">
						<h1 className="text-[#fff] leading-snug text-5xl font-bold">
							​BEAUTIFUL. <br /> GLAMOROUS.
							<br /> CONFIDENT.
						</h1>
						<div className="mt-7">
							<CustomButton bgCol="#fcbcb2" txt="BOOK NOW" txtCol="white" />
						</div>
					</div>
				</div>
				<div className="w-2/4 img-div">
					<img src={lady} alt="lady" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
