import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

function ContactForm() {
	return (
		<section className="flex py-24 justify-center text-[#fcbcb2] bg-[#31353d] ">
			<div>
				<h3 className="text-2xl mb-5">
					BE THE FIRST TO KNOW ABOUT SPECIAL SALES AND NEW ARRIVALS
				</h3>
				<form>
					<label className="text-white text-lg">Enter Your Email Here</label>
					<div className="flex gap-20 mt-16">
						<CustomInput
							borderColor={"#fcbcb2"}
							type={"email"}
							txtCol={"#fcbcb2"}
						/>
						<CustomButton txt="SUBSCRIBE" bgCol="#fcbcb2" txtCol="black" />
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
