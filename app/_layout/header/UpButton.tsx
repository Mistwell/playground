"use client";
import { MotionValue, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function UpButton({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const pathname = usePathname();
	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	const variants = {
		initial: {
			opacity: 0,
			x: 20,
			y: 20,
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0,
		},
		exit: {
			opacity: 0,
			x: 20,
			y: 20,
		},
	};

	return (
		<motion.div
			variants={variants}
			onClick={() => {
				scrollToTop();
			}}
			className="group fixed bottom-6 right-6 aspect-square w-16 bg-white rounded-full z-[10] react-svg max-w-[4rem] cursor-pointer"
		>
			<svg
				width="100"
				height="100"
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="rotate-90"
			>
				<motion.circle
					cx="50"
					cy="50"
					r="42"
					className="stroke-purple-500"
					strokeWidth="6"
					pathLength="1"
					style={{ pathLength: scrollYProgress }}
				/>
			</svg>
			<div className="absolute inset-0 w-full h-full flex items-center justify-center">
				<div className="react-svg max-w-[2.1rem]">
					<svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"
							className="group-hover:fill-purple-500 duration-300"
						/>
					</svg>
				</div>
			</div>
		</motion.div>
	);
}
