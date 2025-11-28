import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function paymentShipping() {
	return El({
		element: "div",
		className: "px-6",
		children: [
			El({
				element: "div",
				className: "w-full flex justify-between items-center",
				children: [
					El({
						element: "div",
						className: "flex justify-start items-center gap-6  mt-8",
						children: [
							El({
								element: "img",
								className: "",
								src: "/public/assets/images/back.png",
								className: "w-5 h-5 cursor-pointer",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/checkout");
										},
									},
								],
							}),
							El({
								element: "div",
								innerText: "Payment Methods",
								className: "font-semibold text-[25px]",
							}),
						],
					}),
					El({
						element: "img",
						src: "/public/assets/images/add-square-svgrepo-com.svg",
						className: "w-7 h-7 mt-8 ",
					}),
				],
			}),
			El({
				element: "div",
				innerText: "Select the payment method you want to use. ",
				className: "text-gray-600 mt-6 font-semibold",
			}),
			El({
				element: "div",
				className:
					"flex justify-between items-center p-6 w-full mt-6 shadow-lg rounded-2xl",
				children: [
					El({
						element: "div",
						className: "left flex justify-center items-center gap-4",
						children: [
							El({
								element: "img",
								src: "/public/assets/images/wallet.svg",
								className: "w-8 h-8",
							}),
							El({
								element: "div",
								innerText: "My Wallet",
								className: "text-[20px] font-bold",
							}),
						],
					}),

					El({
						element: "div",
						className: "right flex justify-center items-center gap-4",
						children: [
							El({
								element: "div",
								innerText: "$9379",
								className: "text-[18px] font-bold",
							}),
							El({
								element: "div",
								className: "w-6 h-6 rounded-[50%] border-2 border-black",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-between items-center p-6 w-full mt-6 shadow-lg rounded-2xl",
				children: [
					El({
						element: "div",
						className: "left flex justify-center items-center gap-4",
						children: [
							El({
								element: "img",
								src: "/public/assets/images/paypal.svg",
								className: "w-8 h-8",
							}),
							El({
								element: "div",
								innerText: "Paypal",
								className: "text-[20px] font-bold",
							}),
						],
					}),

					El({
						element: "div",
						className: "right flex justify-center items-center gap-4",
						children: [
							El({
								element: "div",
								innerText: "",
								className: "text-[18px] font-bold",
							}),
							El({
								element: "div",
								className: "w-6 h-6 rounded-[50%] border-2 border-black",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-between items-center p-6 w-full mt-6 shadow-lg rounded-2xl",
				children: [
					El({
						element: "div",
						className: "left flex justify-center items-center gap-4",
						children: [
							El({
								element: "img",
								src: "/public/assets/images/google.svg",
								className: "w-8 h-8",
							}),
							El({
								element: "div",
								innerText: "Google Play",
								className: "text-[20px] font-bold",
							}),
						],
					}),

					El({
						element: "div",
						className: "right flex justify-center items-center gap-4",
						children: [
							El({
								element: "div",
								innerText: "",
								className: "text-[18px] font-bold",
							}),
							El({
								element: "div",
								className: "w-6 h-6 rounded-[50%] border-2 border-black",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-between items-center p-6 w-full mt-6 shadow-lg rounded-2xl",
				children: [
					El({
						element: "div",
						className: "left flex justify-center items-center gap-4",
						children: [
							El({
								element: "img",
								src: "/public/assets/images/apple.svg",
								className: "w-8 h-8",
							}),
							El({
								element: "div",
								innerText: "Apple Pay",
								className: "text-[20px] font-bold",
							}),
						],
					}),

					El({
						element: "div",
						className: "right flex justify-center items-center gap-4",
						children: [
							El({
								element: "div",
								innerText: "",
								className: "text-[18px] font-bold",
							}),
							El({
								element: "div",
								className: "w-6 h-6 rounded-[50%] border-2 border-black",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-between items-center p-6 w-full mt-6 shadow-lg rounded-2xl",
				children: [
					El({
						element: "div",
						className: "left flex justify-center items-center gap-4",
						children: [
							El({
								element: "img",
								src: "/public/assets/images/mastercard-svgrepo-com.svg",
								className: "w-10 h-10",
							}),
							El({
								element: "div",
								innerText: ".... .... .... .... 4679",
								className: "text-[20px] font-bold",
							}),
						],
					}),

					El({
						element: "div",
						className: "right flex justify-center items-center gap-4",
						children: [
							El({
								element: "div",
								innerText: "",
								className: "text-[18px] font-bold",
							}),
							El({
								element: "div",
								className: "w-6 h-6 rounded-[50%] border-2 border-black",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-center items-center  mx-[-24px]  bg-white mt-45  px-6 pt-6 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]",
				children: [
					El({
						element: "button",
						innerText: "Confirm Payment",
						className:
							"w-full flex justify-center items-center gap-3 bg-black  text-white h-[50px] rounded-full cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/checkout");
								},
							},
						],
					}),
				],
			}),
		],
	});
}
