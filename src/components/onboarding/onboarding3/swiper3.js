import { El } from "../../../utils/el";
export function Swiper3() {
	return El({
		element: "div",
		className: "h-screen w-full",
		children: [
			El({
				element: "div",
				className:
					"w-full h-[602px] bg-no-repeat bg-cover bg-[url('public/assets/images/W3.jpg')] ",
			}),
			El({
				element: "div",
				className:
					"max-w-[380px] text-[32px] font-semibold text-center mt-8 mx-6 leading-tight",
				innerText: "Let's fulfill your fashion needs with shoearight now!",
			}),
			// El({
			// 	element: "button",
			// 	innerText: "Get Started",
			// 	id: "start-btn",
			// 	className:
			// 		"w-[380px] h-[47px] bg-black text-white text-center rounded-[30px] absolute left-6 bottom-8 z-10 text-[14px] font-medium cursor-pointer",
			// 	eventListener: [
			// 		{
			// 			event: "click",
			// 			callback: () => {
			// 				console.log("hiii");
			// 			},
			// 		},
			// 	],
			// }),
		],
	});
}
