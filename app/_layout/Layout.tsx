"use client";

import { useRef } from "react";
import Header from "./header/Header";
import { useScroll } from "framer-motion";
import UpButton from "./header/UpButton";

export default function Layout({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	return (
		<div ref={ref}>
			<Header />
			<main>{children}</main>
			<UpButton scrollYProgress={scrollYProgress} />
		</div>
	);
}
