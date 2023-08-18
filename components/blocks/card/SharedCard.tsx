"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SharedCard({
	href,
	layoutId,
}: {
	href: string;
	layoutId: string;
}) {
	return (
		<Link href={href} key={"card_" + layoutId}>
			<motion.div className="group relative w-full h-[200px] rounded-lg bg-white p-10 overflow-hidden">
				<div className="text-2xl text-white relative z-[2]">
					Card will transform in next page
				</div>
				<motion.div
					layoutId={layoutId}
					className={`bg-purple-500 absolute inset-0 w-full h-full rounded-lg`}
				></motion.div>
			</motion.div>
		</Link>
	);
}
