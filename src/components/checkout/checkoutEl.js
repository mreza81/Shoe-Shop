import { El } from "../../utils/el";

export function checkoutEl() {
	return El({
		element: "div",
		className: "checkout-container px-6 pt-",
		children: [
			El({
				element: "div",
				className: "checkout-header w-full flex justify-between items-center",
				children: [
					El({
						element: "div",
						className: "co-header-left",
						children: [
							El({
								element: "img",
							}),
						],
					}),
					El({
						element: "div",
						className: "co-header-right",
					}),
				],
			}),
		],
	});
}
