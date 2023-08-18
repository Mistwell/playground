export default function PageWrapper({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<>
			<div className="relative z-[2] content-container">
				<h1 className="text-white text-9xl font-bold font-title text-center py-24">
					{title}
				</h1>
				<div>{children}</div>
			</div>
		</>
	);
}
