import dynamic from "next/dynamic";

const FluidSplatBg = dynamic(() => import("@/blocks/fluid/FluidSplatBg"), {
	ssr: false,
});

export default function Mainpage() {
	return (
		<div className="bg-black">
			<div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
				<FluidSplatBg />
				<div className="relative z-[2]">
					<h1 className="text-white text-9xl font-bold font-title">
						Playground space
					</h1>
				</div>
				<div className="bg-gradient-to-b from-transparent from-[60%] to-black absolute z-[1] inset-0 w-full h-full pointer-events-none"></div>
			</div>
			<div className="h-screen w-full"></div>
			<div className="h-screen w-full"></div>
			<div className="h-screen w-full"></div>
		</div>
	);
}
