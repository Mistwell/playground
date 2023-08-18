"use client";

import {
	AnimatePresence,
	LazyMotion,
	domAnimation,
	motion,
} from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnImationWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<>
			<LazyMotion features={domAnimation}>
				<motion.main
					key={pathname}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.3,
					}}
				>
					<AnimatePresence mode="wait">{children}</AnimatePresence>
				</motion.main>
			</LazyMotion>
		</>
	);
}
