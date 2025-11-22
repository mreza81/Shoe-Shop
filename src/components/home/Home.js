import { El } from "../../utils/el";

export function Home() {
	return El({
		element: "div",
		className: "home-container",
		children: [
			El({
				element: "div",
				className: "home-header",
				children: "",
			}),
		],
	});
}
