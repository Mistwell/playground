"use client";
import { useEffect, useRef } from "react";
import Fluid from "webgl-fluid";

// https://paveldogreat.github.io/WebGL-Fluid-Simulation/ playground for options
// FLuid Splats bg sample

export default function FluidSplatBg() {
	const canvas = useRef(null);
	useEffect(() => {
		if (canvas.current && window) {
			let container = canvas.current;
			Fluid(container, {
				IMMEDIATE: false, // Whether to trigger multiple random splats when initialized
				TRIGGER: "hover", // Can be change to 'click'
				SIM_RESOLUTION: 128,
				DYE_RESOLUTION: 512,
				CAPTURE_RESOLUTION: 512,
				DENSITY_DISSIPATION: 1,
				VELOCITY_DISSIPATION: 0.2,
				PRESSURE: 0.8,
				PRESSURE_ITERATIONS: 20,
				CURL: 30,
				SPLAT_RADIUS: 0.5,
				SPLAT_FORCE: 3000,
				SHADING: true,
				COLORFUL: true, // need true if hover trigger
				COLOR_UPDATE_SPEED: 2,
				PAUSED: false,
				BACK_COLOR: { r: 0, g: 0, b: 0 },
				TRANSPARENT: true,
				BLOOM: false,
				BLOOM_ITERATIONS: 8,
				BLOOM_RESOLUTION: 256,
				BLOOM_INTENSITY: 0.8,
				BLOOM_THRESHOLD: 0.6,
				BLOOM_SOFT_KNEE: 0.7,
				SUNRAYS: true,
				SUNRAYS_RESOLUTION: 196,
				SUNRAYS_WEIGHT: 1.0,
			});
		}
	}, []);

	return (
		<>
			<canvas ref={canvas} className="w-full h-full absolute inset-0"></canvas>
		</>
	);
}
