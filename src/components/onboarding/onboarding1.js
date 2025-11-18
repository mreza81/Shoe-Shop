import { El } from "../../utils/el.js";
export function Onboarding1() {
	return El({
		element: "div",
		className: "bg-white w-full h-full text-black",
		children: [
			El({
				element: "div",
				className: "icon",
				children: [
					El({
						element: "img",
						src: "",
					}),
				],
			}),
		],
	});
}
