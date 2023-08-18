"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HamburgerMenu() {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	const variantsMenu = {
		initial: {
			top: "0",
			right: "0",
			width: "0",
			height: "0",
			borderRadius: "0 0 100% 100%",
		},

		closed: {
			width: ["25rem", "4rem", "4rem", "4rem"],
			height: ["100vh", "100vh", "100vh", "0vh"],
			borderRadius: ["0 0 0 0", "0 0 0 0", "0 0 0 0", "0 0 100% 100%"],
			transition: {
				when: "afterChildren",
				staggerChildren: 0.1,
			},
		},

		open: {
			width: ["4rem", "4rem", "4rem", "25rem"],
			height: "100vh",
			borderRadius: ["0 0 100% 100%", "0 0 0 0", "0 0 0 0", "0 0 0 0"],
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};

	const menuItemVariant = {
		initial: {
			opacity: 0,
			x: -20,
			transition: {
				duration: 0.2,
			},
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.2,
			},
		},
		closed: {
			opacity: 0,
			x: -20,
			transition: {
				duration: 0.2,
			},
		},
	};
	const menuItems = [
		{
			href: "/cards",
			label: "Cards",
		},
		{
			href: "/shapes",
			label: "Shapes",
		},
	];

	const variants = {
		initial: {
			opacity: 0,
			x: 20,
			y: -20,
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0,
		},
		exit: {
			opacity: 0,
			x: 20,
			y: -20,
		},
	};

	return (
		<>
			<motion.button
				variants={variants}
				onClick={() => {
					setOpen(!isOpen);
				}}
				className="outline-none overflow-hidden fixed top-6 right-6 aspect-square w-16 bg-white rounded-full z-[10] cursor-pointer"
			>
				<motion.div
					animate={
						isOpen
							? { x: "0", y: "0.8rem", rotate: 45 }
							: { x: "0", y: "0", rotate: 0 }
					}
					className="absolute left-2.5 top-[1rem] h-2 w-11 bg-black rounded-lg"
				/>
				<motion.div
					animate={
						isOpen
							? {
									opacity: 0,
									x: "-2rem",
							  }
							: {
									opacity: 1,
									x: "0",
							  }
					}
					className="absolute left-2.5 top-[1.8rem] h-2 w-11 bg-black rounded-lg"
				/>
				<motion.div
					animate={
						isOpen
							? { x: "0", y: "-0.8rem", rotate: -45 }
							: { x: "0", y: "0", rotate: 0 }
					}
					className="absolute left-2.5 top-[2.6rem] h-2 w-11 bg-black rounded-lg"
				/>
			</motion.button>
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div initial={"initial"} animate={"open"} exit={"closed"}>
						<motion.div
							variants={variantsMenu}
							className="fixed bg-purple-500 z-[8] shadow-md shadow-black"
						>
							<div className="mt-32 px-12 text-2xl">
								{menuItems.map(function (item, index) {
									return (
										<motion.div
											key={index}
											className="mt-4"
											variants={menuItemVariant}
										>
											<Link href={item.href}>{item.label}</Link>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
