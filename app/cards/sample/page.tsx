"use client";

import { motion } from "framer-motion";

export default function page() {
	return (
		<>
			<div className="">
				<div className="pt-24 w-full relative">
					<div className="content-container">
						<div className="flex items-center justify-start">
							<div className="mr-16">
								<motion.div
									layoutId={"card"}
									className="w-64 aspect-square bg-purple-500 rounded-lg"
								/>
							</div>
							<div className="text-6xl text-bold">
								Card block in another page
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
