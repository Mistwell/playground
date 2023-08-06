import "@/styles/global.scss";

import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import Layout from "./_layout/Layout";

const OpenSansFont = Open_Sans({
	weight: ["400", "700"],
	subsets: ["latin", "cyrillic"],
	variable: "--font-main",
});
const InterFont = Inter({
	weight: ["400", "700", "300", "500"],
	subsets: ["latin", "cyrillic"],
	variable: "--font-title",
});

export const metadata: Metadata = {
	title: "Playground place",
	description: "Playground place",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${OpenSansFont.variable} ${InterFont.variable} font-main min-h-screen text-white`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
