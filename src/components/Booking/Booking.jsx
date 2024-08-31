import React from "react";
import bridal from "../../assets/image/img8.jpg";
import lady from "../../assets/image/img6.jpg";
import lady1 from "../../assets/image/img7.jpg";
import lady2 from "../../assets/image/img8.jpg";
import CustomButton from "../CustomButton/CustomButton";
import "./booking.scss";

const Booking = () => {
	return (
		<section className="lg:px-40 md:px-10 px-20 py-40 flex justify-center">
			<div className="deet">
				<div className="text-center mb-16">
					<h2 className="lg:text-5xl text-3xl">Our Services</h2>
				</div>
				<div>
					<div className="flex gap-10 flex-wrap deet justify-center">
						<div className="border-2 flex-child">
							<div>
								<div>
									<img src={bridal} alt="frontal installation" className="" />
								</div>
								<div className="p-8">
									<h3 className="lg:text-4xl mb-10">DREAM BRIDAL HAIR</h3>
									<hr />
									<div className="mt-10 lg:text-xl">
										<p>1 hr</p>
										<p className="mt-2">₦50,000</p>
									</div>

									<div className="mt-7">
										<CustomButton
											bgCol="#A06054"
											txt="Book Now"
											txtCol="white"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="border-2 flex-child">
							<div>
								<div>
									<img src={lady} alt="frontal installation" className="" />
								</div>
								<div className="p-8">
									<h3 className="lg:text-4xl mb-10">WIG REVAMPING</h3>
									<hr />
									<div className="mt-10 lg:text-xl">
										<p>1 hr</p>
										<p className="mt-2">₦50,000</p>
									</div>

									<div className="mt-7">
										<CustomButton
											bgCol="#A06054"
											txt="Book Now"
											txtCol="white"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="border-2 flex-child">
							<div>
								<div>
									<img src={lady1} alt="frontal installation" className="" />
								</div>
								<div className="p-8">
									<h3 className="lg:text-4xl mb-10">LACE WIG INSTALLATION</h3>
									<hr />
									<div className="mt-10 lg:text-xl">
										<p>1 hr</p>
										<p className="mt-2">₦50,000</p>
									</div>

									<div className="mt-7">
										<CustomButton
											bgCol="#A06054"
											txt="Book Now"
											txtCol="white"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="border-2 flex-child">
							<div>
								<div className="">
									<img src={lady2} alt="frontal installation" className="" />
								</div>
								<div className="p-8">
									<h3 className="lg:text-4xl mb-10">COLOURING</h3>
									<hr />
									<div className="mt-10 lg:text-xl">
										<p>1 hr</p>
										<p className="mt-2">₦50,000</p>
									</div>

									<div className="mt-7">
										<CustomButton
											bgCol="#A06054"
											txt="Book Now"
											txtCol="white"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Booking;
