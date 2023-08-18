"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
	const variants = {
		initial: {
			opacity: 0,
			x: -20,
			y: -20,
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0,
		},
		exit: {
			opacity: 0,
			x: -20,
			y: -20,
		},
	};
	return (
		<motion.div variants={variants}>
			<Link
				href="/"
				className="group fixed top-6 left-6 aspect-square w-16 bg-white rounded-full z-[10] cursor-pointer flex items-center justify-center"
			>
				<div className="react-svg max-w-[40px] translate-y-[-1px]">
					<svg height="16px" id="home" viewBox="0 0 16 16" width="16px">
						<path
							className={"fill-black group-hover:fill-purple-500 duration-300"}
							d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"
						/>
					</svg>
				</div>
			</Link>
		</motion.div>
	);
}
