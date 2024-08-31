import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function Gallery() {
	return (
		<>
			<Navigation />
			<section className="lg:px-40 px-10 lg:py-44 py-40">
				<h2 className="lg:text-5xl  text-3xl lg:mb-20 mb-10 text-center">
					PAST WORKS
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Gallery;
