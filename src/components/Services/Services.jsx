import React from "react";
import "./services.scss";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";
import img6 from "../../assets/image/img6.jpg";
import img7 from "../../assets/image/img7.jpg";

function Services() {
	return (
		<section className="service-section">
			<div className="bg-div">
				<div>
					<div className="center-text">
						<div className="center-text-div lg:w-2/4 lg:px-0 px-7">
							<h2 className="lg:text-4xl text-2xl font-medium mb-8 mt-14 text-[#fcbcb2]">
								"Transform your look with our Hair Styling services!"
							</h2>
							<p className="text-lg text-white">
								Our professional hair styling services are delivered by
								experienced stylists with over 5 years of experience. We strive
								to provide each client with an individualized look that is
								tailored to their unique style and personality. Our team of
								experts will work with you to create the perfect style.
							</p>
						</div>
					</div>
					<div className="flex-div flex justify-center mt-24">
						<div>
							<div className="flex1 flex lg:flex-row flex-col gap-5">
								<div class="flex-item">
									<figure>
										<img src={img1} alt="image" loading="lazy" />
										<figcaption>Bridal Styling</figcaption>
									</figure>
								</div>
								<div class="flex-item">
									<figure>
										<img src={img2} alt="image" />
										<figcaption>Frontal installation</figcaption>
									</figure>
								</div>
								<div class="flex-item">
									<figure>
										<img src={img3} alt="image" />
										<figcaption>Wigging</figcaption>
									</figure>
								</div>
							</div>
							<div className="flex2 flex lg:flex-row flex-col justify-center">
								<div className="flex lg:flex-row flex-col gap-5">
									<div class="flex-item">
										<figure>
											<img src={img6} alt="image" />
											<figcaption>Closure</figcaption>
										</figure>
									</div>
									<div class="flex-item">
										<figure>
											<img src={img7} alt="image" />
											<figcaption>Home Service</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
