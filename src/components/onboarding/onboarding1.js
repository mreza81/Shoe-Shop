import { El } from "../../utils/el.js";
export function Onboarding1() {
	return El({
		element: "div",
		className: "bg-white w-full h-full",
		children: [
			El({
				element: "div",
				className:
					"icon flex justify-center items-center gap-3 mt-[392px] w-[231px] mx-[98px]",
				children: [
					El({
						element: "div",
						className:
							"bg-black rounded-[50%] w-[59px] h-[59px] flex justify-center items-center ",
						children: [
							El({
								element: "img",
								src: "public/assets/images/Vector 1.png",
							}),
						],
					}),
					El({
						element: "p",
						innerText: "Shoea",
						className: "text-[52px] font-bold ",
					}),
				],
			}),
			El({
				element: "img",
				src: "public/assets/images/Spinner-1s-200px.svg",
				className: "w-16 h-16 mt-[306px] mx-[190px]",
			}),
		],
	});
}
