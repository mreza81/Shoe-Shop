import { El } from "../../../utils/el";
export function Swiper1() {
	return El({
		element: "div",
		className: "h-screen w-full",
		children: [
			El({
				element: "div",
				className:
					"w-full h-[657px] bg-no-repeat bg-[url('public/assets/images/W1.jpg')] ",
			}),
		],
	});
}
