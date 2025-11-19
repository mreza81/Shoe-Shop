import { El } from "../../../utils/el";
export function Swiper2() {
	return El({
		element: "div",
		className: "h-screen w-full",
		children: [
			El({
				element: "div",
				className:
					"w-full h-[602px] bg-no-repeat bg-cover bg-[url('public/assets/images/W2.jpg')] ",
			}),
			El({
				element: "div",
				className:
					"max-w-[380px] text-[32px] font-semibold text-center mt-8 mx-6 leading-tight",
				innerText: "Your satisfaction is our number one periority",
			}),
		],
	});
}
