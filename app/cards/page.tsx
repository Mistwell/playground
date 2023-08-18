import FlipCard from "@/blocks/card/FlipCard";
import SharedCard from "@/blocks/card/SharedCard";
import PageWrapper from "@/shared/PageWrapper";

export default function page() {
	return (
		<>
			<PageWrapper title="Cards page">
				<div className="min-h-[100vh] w-full">
					<div className="content-container">
						<SharedCard href={"/cards/sample"} layoutId={"card"} />
						<div className="mt-12 grid grid-cols-4 gap-8">
							<FlipCard />
							<FlipCard />
							<FlipCard />
							<FlipCard />
						</div>
					</div>
				</div>
			</PageWrapper>
		</>
	);
}
