export default function FlipCard() {
	return (
		<>
			<div className="group w-full aspect-[2/3] rounded-lg overflow-hidden relative">
				<div className="group-hover:[transform:rotateY(180deg)] transition-transform duration-500 w-full h-full rounded-lg bg-red-500 absolute inset-0 backface-hidden p-10">
					<div className="text-2xl text-white text-center">
						This is Front Data or Image
					</div>
				</div>
				<div className="group-hover:[transform:rotateY(360deg)] transition-transform duration-500 [transform:rotateY(180deg)] w-full h-full rounded-lg bg-purple-500 absolute inset-0 backface-hidden p-10">
					<div className="text-2xl text-white text-center">
						This is Back Data with more space
					</div>
				</div>
			</div>
		</>
	);
}
