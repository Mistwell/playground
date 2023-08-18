"use client";
import { useRef } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import UpButton from "./header/UpButton";
import AnImationWrapper from "./AnImationWrapper";
import BackLink from "./header/BackLink";
import HamburgerMenu from "./header/HamburgerMenu";
import Logo from "./header/Logo";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const pathname = usePathname();
	const variants = {
		initial: {
			opacity: 1,
		},
		animate: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
			},
		},
	};
	return (
		<motion.div ref={ref}>
			<AnimatePresence mode="wait">
				<motion.div
					variants={variants}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<Logo />
					<HamburgerMenu />
					<UpButton scrollYProgress={scrollYProgress} />
					<BackLink key="backComponent" />
				</motion.div>
			</AnimatePresence>
			<AnImationWrapper>{children}</AnImationWrapper>
		</motion.div>
	);
}
