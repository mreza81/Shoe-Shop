import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
import { calculateOff } from "./functionsCheckout";

export function checkoutEl() {
	return El({
		element: "div",
		className: "checkout-container px-6 pt-4",
		id: "checkout-container",
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
								className: "w-5 cursor-pointer",
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
				className: `
            w-full bg-white rounded-2xl shadow-sm 
            p-5 flex items-center justify-between
        `,
				children: [
					El({
						element: "div",
						className: "flex items-center gap-4",
						children: [
							El({
								element: "div",
								className: `
                            w-12 h-12 rounded-full bg-gray-100 
                            flex items-center justify-center
                        `,
								children: [
									El({
										element: "img",
										src: "/public/assets/images/location-svgrepo-com.svg",
										className: "w-9 h-9",
									}),
								],
							}),

							// Texts
							El({
								element: "div",
								className: "flex flex-col gap-1",
								children: [
									El({
										element: "span",
										className: "font-semibold text-[17px]",
										innerText: `${store.getState("address") || "Home"}`,
									}),
									El({
										element: "span",
										className: "text-gray-500 text-[14px]",
										innerText: "61480 Sunbrok Park PC 5679",
									}),
								],
							}),
						],
					}),

					El({
						element: "img",
						src: "/public/assets/images/edit.png",
						className: "w-5 h-5 opacity-100 cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/checkout/shipping:address");
								},
							},
						],
					}),
				],
			}),

			El({
				element: "div",
				className: "mt-3 w-full h-[1px]  bg-[#e1e1e1]  rounded-[50px]  ",
			}),
			El({
				element: "div",
				className: "mt-3 font-semibold text-[22px]",
				innerText: "Order List",
			}),
			El({
				element: "div",
				className:
					"mt-3 overflow-scroll no-scrollbar h-[160px] flex flex-col gap-4 bg-white",
				id: "checkout-cards",
			}),
			El({
				element: "div",
				className: "mt-3 w-full h-[1px]  bg-[#e1e1e1]  rounded-[50px]  ",
			}),
			El({
				element: "div",
				className: "mt-3 font-semibold text-[22px]",
				innerText: "Chose Shipping",
			}),
			El({
				element: "div",
				className:
					"mt-3 w-full  rounded-2xl px-6 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
				children: [
					El({
						element: "div",
						className: "flex items-center justify-center gap-3",
						children: [
							El({
								element: "img",
								src: "public/assets/images/truck.png",
							}),
							El({
								element: "div",
								innerText: "Chose Shipping Type",
								className: "font-semibold text-[17px] ",
							}),
						],
					}),
					El({
						element: "img",
						src: "public/assets/images/arrow-next.png",
						className: "h-5 w-5 cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/checkout/shipping:choose");
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "mt-4 w-full h-[1px]  bg-[#e1e1e1]  rounded-[50px]  ",
			}),
			El({
				element: "div",
				className: "mt-4 font-semibold text-[22px]",
				innerText: "Promo Code",
			}),
			El({
				element: "div",
				className: "flex items-center justify-between mt-4  ",
				children: [
					El({
						element: "input",
						type: "text",
						placeholder: "Enter Promo Code",
						className:
							"w-[320px] bg-[#F7F7F9] text-gray-800 placeholder-gray-400 rounded-2xl py-2 px-6 text-lg outline-none shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
						id: "promo-input",
					}),
					El({
						element: "img",
						src: "public/assets/images/add-plus-svgrepo-com.svg",
						className: "w-9 h-9 ",
						id: "add-promo-btn",
						eventListener: [
							{
								event: "click",
								callback: calculateOff,
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"mt-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col justify-start items-start px-6 py-2 gap-2 relative",
				children: [
					El({
						element: "div",
						className: "flex justify-between items-center w-full",
						children: [
							El({
								element: "div",
								innerText: "Amount",
								className: "text-gray-500",
							}),
							El({
								element: "div",
								innerText: "$0.00",
								className: "",
								id: "Amount",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex justify-between items-center w-full",
						children: [
							El({
								element: "div",
								innerText: "Shipping",
								className: "text-gray-500",
							}),
							El({
								element: "div",
								innerText: `$${store.getState("shipping") || 10}.00`,
								className: "",
							}),
						],
					}),
					El({
						element: "div",
						className: " w-full h-[1px]  bg-[#e1e1e1]  rounded-[50px]  ",
					}),
					El({
						element: "div",
						className: "flex justify-between items-center w-full",
						children: [
							El({
								element: "div",
								innerText: "Total",
								className: "text-gray-500",
							}),
							El({
								element: "div",
								innerText: "$0'00",
								className: "",
								id: "total",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-center items-center  mx-[-24px]  bg-white mt-4  px-6 pt-6 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]",
				children: [
					El({
						element: "button",
						className:
							"w-full flex justify-center items-center gap-3 bg-black  text-white h-[50px] rounded-full cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									// const display = document.getElementById("discount-display");

									router.navigate("/checkout/shipping:payment");
								},
							},
						],
						children: [
							El({
								element: "div",
								innerText: "Continue to payment",
							}),

							El({
								element: "img",
								src: "public/assets/images/right-arrow-svgrepo-com (2).svg",
								className: "w-3-5 h-3.5 mt-1",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"absolute bg-black  text-white bottom-72 right-6 w-48 py-2 px-4 rounded-full hidden",
				id: "discount-display",
			}),
			El({
				element: "img",
				src: "/public/assets/images/cross-svgrepo-com.svg",
				className: "absolute w-6 h-6 bottom-[294px] right-8 z-999",
				eventListener: [
					{
						event: "click",
						callback: () => {
							const display = document.getElementById("discount-display");
							display.classList.add("hidden");
						},
					},
				],
			}),
		],
	});
}
