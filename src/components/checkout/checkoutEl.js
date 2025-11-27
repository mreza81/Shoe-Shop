import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function checkoutEl() {
	return El({
		element: "div",
		className: "checkout-container px-6 pt-8",
		children: [
			El({
				element: "div",
				className: "checkout-header w-full flex justify-between items-center",
				children: [
					El({
						element: "div",
						className: "co-header-left flex justify-center items-center gap-6",
						children: [
							El({
								element: "img",
								src: "public/assets/images/back.png",
								className: "w-5",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/cart");
										},
									},
								],
							}),
							El({
								element: "div",
								innerText: "Checkout",
								className: "font-semibold text-[25px]",
							}),
						],
					}),
					El({
						element: "div",
						className: "co-header-right",
						children: [
							El({
								element: "img",
								className: "w-8 h-8",
								src: "public/assets/images/more-circle-svgrepo-com.svg",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				innerText: "Shipping Address",
				className: "mt-8 font-semibold text-[22px]",
			}),
			El({
				element: "div",
				className: "address-div mt-6 w-full bg-red-600 h-[85px] shadow-lg",
				id: "address-div",
			}),
			El({
				element: "div",
				className: "mt-6",
			}),
		],
	});
}
