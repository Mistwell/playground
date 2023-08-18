import MorphShape from "@/blocks/shapes/MorphShape";
import MorphShapeMask from "@/blocks/shapes/MorphShapeMask";
import MorphWave from "@/blocks/shapes/MorphWave";
import PageWrapper from "@/shared/PageWrapper";

export default function page() {
	return (
		<div className="relative min-h-screen">
			<PageWrapper title={"Shapes"}>
				<div className="w-full min-h-screen grid grid-cols-2 gap-16 relative z-[2]">
					<div className="flex items-center justify-start flex-col">
						<div className="text-4xl font-bold">SVG morph with framer</div>
						<div className="text-2xl mt-2">
							Need same svg range and shape parameters
						</div>
						<div className="text-2xl mt-2">
							Same shapes can be generated{" "}
							<a href="https://app.haikei.app/" target="_blank">
								https://app.haikei.app/
							</a>
						</div>
						<div>
							<MorphShape />
						</div>
					</div>
					<div className="flex items-center justify-start flex-col relative z-[2]">
						<div className="text-4xl font-bold">SVG morph mask</div>
						<div className="text-2xl mt-2">
							Need same svg range and shape parameters
						</div>
						<div className="text-2xl mt-2">
							Same shapes can be generated{" "}
							<a href="https://app.haikei.app/" target="_blank">
								https://app.haikei.app/
							</a>
						</div>
						<div>
							<MorphShapeMask />
						</div>
					</div>
				</div>
			</PageWrapper>
			<div className="flex items-end justify-end flex-col absolute bottom-0 left-0 right-0">
				<div className="text-4xl font-bold">SVG morph waves</div>
				<div className="w-full">
					<MorphWave />
				</div>
			</div>
		</div>
	);
}
