import { El } from "../../utils/el";
export function Onboarding2() {
	return El({
		element: "div",
		className:
			" relative z-0 w-full h-[926px] opacity-100  bg-[url('public/assets/images/WallpaperDog-205346101.png')]  bg-cover bg-center pt-[629px] px-8 ",
		children: [
			El({
				element: "div",
				className: "absolute top-0 left-0 w-full h-full bg-black opacity-50",
			}),
			El({
				element: "div",
				className: "absolute opasity-100",
				children: [
					El({
						element: "p",
						innerText: "Welcome to 👋",
						className: "text-white text-[40px] font-semibold",
					}),
					El({
						element: "p",
						innerText: "Shoea",
						className: "text-white text-[72px] font-bold",
					}),
					El({
						element: "p",
						innerText:
							"The best sneakers and shoes e-commerse app of the century for your fashion needs!",
						className: "text-white text-[16px] font-semibold max-w-[364px]",
					}),
				],
			}),
		],
	});
}
