import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
import { selectItems } from "./shippingFuncs";

export function chooseShipping() {
	return El({
		element: "div",
		className: "px-6",

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
						innerText: "Choose Shipping",
						className: "font-semibold text-[25px]",
					}),
				],
			}),
			El({
				element: "div",
				className: "shipping-chose-div mt-8",
				children: [
					El({
						element: "div",
						className:
							"w-full bg-white rounded-2xl shadow-lg p-4 flex  items-center justify-between mt-7",

						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "img",
										src: "/assets/images/shipping-economy.svg",
										className: "w-15 h-16",
									}),

									El({
										element: "div",
										className: "flex flex-col",
										children: [
											El({
												element: "span",
												className: "font-semibold text-[20px]",
												innerText: "Economy",
											}),
											El({
												element: "span",
												className: "text-gray-400 text-[14px]",
												innerText: "Estimated Arrival, Dec 20–23",
											}),
										],
									}),
								],
							}),

							El({
								element: "div",
								className: "flex items-center gap-3",
								children: [
									El({
										element: "span",
										className: "font-semibold text-[22px]",
										innerText: "$10",
									}),
									El({
										element: "div",
										className:
											"w-5 h-5 border border-black rounded-full flex justify-center items-center",
										eventListener: [
											{
												event: "click",
												callback: (e) => {
													store.setState("shipping", 10);

													selectItems(e);
												},
											},
										],
										children: [
											El({
												element: "div",
												className:
													"select bg-black w-4 h-4 rounded-[50%] hidden",
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"w-full bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between mt-7",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "img",
										src: "/assets/images/shipping-regular.svg",
										className: "w-16 h-16",
									}),

									El({
										element: "div",
										className: "flex flex-col",
										children: [
											El({
												element: "span",
												className: "font-semibold text-[20px]",
												innerText: "Regular",
											}),
											El({
												element: "span",
												className: "text-gray-400 text-[14px]",
												innerText: "Estimated Arrival, Dec 20–22",
											}),
										],
									}),
								],
							}),

							El({
								element: "div",
								className: "flex items-center gap-3",
								children: [
									El({
										element: "span",
										className: "font-semibold text-[22px]",
										innerText: "$15",
									}),
									El({
										element: "div",
										className:
											"w-5 h-5 border border-black rounded-full flex justify-center items-center",
										eventListener: [
											{
												event: "click",
												callback: (e) => {
													store.setState("shipping", 15);

													selectItems(e);
												},
											},
										],
										children: [
											El({
												element: "div",
												className:
													"select bg-black w-4 h-4 rounded-[50%] hidden ",
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"w-full bg-white rounded-2xl shadow-lg p-4 flex  items-center justify-between mt-7",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "img",
										src: "/assets/images/shipping-cargo.svg",
										className: "w-16 h-16",
									}),

									El({
										element: "div",
										className: "flex flex-col",
										children: [
											El({
												element: "span",
												className: "font-semibold text-[20px]",
												innerText: "Cargo",
											}),
											El({
												element: "span",
												className: "text-gray-400 text-[14px]",
												innerText: "Estimated Arrival, Dec 19-20",
											}),
										],
									}),
								],
							}),

							El({
								element: "div",
								className: "flex items-center gap-3",
								children: [
									El({
										element: "span",
										className: "font-semibold text-[22px]",
										innerText: "$20",
									}),
									El({
										element: "div",
										className:
											"w-5 h-5 border border-black rounded-full flex justify-center items-center",
										eventListener: [
											{
												event: "click",
												callback: (e) => {
													store.setState("shipping", 20);

													selectItems(e);
												},
											},
										],
										children: [
											El({
												element: "div",
												className:
													"select bg-black w-4 h-4 rounded-[50%] hidden ",
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className:
							"w-full bg-white rounded-2xl shadow-lg p-4 flex  items-center justify-between mt-7",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									El({
										element: "img",
										src: "/assets/images/shipping-express.svg",
										className: "w-16 h-16",
									}),

									El({
										element: "div",
										className: "flex flex-col",
										children: [
											El({
												element: "span",
												className: "font-semibold text-[20px]",
												innerText: "Express",
											}),
											El({
												element: "span",
												className: "text-gray-400 text-[14px]",
												innerText: "Estimated Arrival, Dec 18-19",
											}),
										],
									}),
								],
							}),

							El({
								element: "div",
								className: "flex items-center gap-3",
								children: [
									El({
										element: "span",
										className: "font-semibold text-[22px]",
										innerText: "$30",
									}),
									El({
										element: "div",
										className:
											"w-5 h-5 border border-black rounded-full flex justify-center items-center",
										eventListener: [
											{
												event: "click",
												callback: (e) => {
													store.setState("shipping", 30);

													selectItems(e);
												},
											},
										],
										children: [
											El({
												element: "div",
												className:
													"select bg-black w-4 h-4 rounded-[50%] hidden ",
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex justify-center items-center  mx-[-24px]  bg-white mt-63  px-6 pt-6 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]",
				children: [
					El({
						element: "button",
						innerText: "Apply",
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
