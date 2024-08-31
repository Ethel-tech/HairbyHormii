import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

function Quote() {
	return (
		<section className="bg-[rgb(220,225,237)] lg:px-60 px-20 lg:pb-40 pt-20 pb-20">
			<h2 className="lg:text-5xl text-3xl">GET A QUOTE</h2>
			<p className="mt-10 lg:text-xl md:text-xl text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
				aspernatur velit?
			</p>
			<form>
				<div className="flex lg:flex-row flex-col gap-20 mt-16">
					<div>
						<label className="text-lg md:text-xl">First Name</label>
						<CustomInput borderColor={"black"} type={"text"} txtCol={"black"} />
					</div>
					<div>
						<label className="text-lg md:text-xl">Last Name</label>
						<CustomInput borderColor={"black"} type={"text"} txtCol={"black"} />
					</div>

					<div>
						<label className="text-lg md:text-xl">Email</label>
						<CustomInput
							borderColor={"black"}
							type={"email"}
							txtCol={"black"}
						/>
					</div>

					<CustomButton txt="SUBSCRIBE" bgCol="#A06054" txtCol="white" />
				</div>
			</form>
		</section>
	);
}

export default Quote;
