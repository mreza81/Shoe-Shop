import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { selectItems } from "./shippingFuncs";

export function addressShipping() {
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
						innerText: "Shipping Address",
						className: "font-semibold text-[25px]",
					}),
				],
			}),
			El({
				element: "div",
				className: `
                  w-full bg-white rounded-2xl shadow-sm 
                  p-5 flex items-center justify-between mt-8
              `,
				children: [
					// Left (icon + texts)
					El({
						element: "div",
						className: "flex items-center gap-4",
						children: [
							// Icon Circle
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
										innerText: "Home",
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

					// Right Edit Icon
					El({
						element: "div",
						className:
							" w-5 h-5 border border-black rounded-full  flex justify-center items-center ",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									selectItems(e);
								},
							},
						],
						children: [
							El({
								element: "div",
								className: "select bg-black w-3 h-3 rounded-[50%] ",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: `
                  w-full bg-white rounded-2xl shadow-sm 
                  p-5 flex items-center justify-between mt-8
              `,
				children: [
					// Left (icon + texts)
					El({
						element: "div",
						className: "flex items-center gap-4",
						children: [
							// Icon Circle
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
										innerText: "Apartemant",
									}),
									El({
										element: "span",
										className: "text-gray-500 text-[14px]",
										innerText: "61480 Sunbrok Park PC 5679", //
									}),
								],
							}),
						],
					}),

					// Right Edit Icon
					El({
						element: "div",
						className:
							" w-5 h-5 border border-black rounded-full  flex justify-center items-center ",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									selectItems(e);
								},
							},
						],

						children: [
							El({
								element: "div",
								className: "select bg-black w-3 h-3 rounded-[50%] hidden ",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: `
                  w-full bg-white rounded-2xl shadow-sm 
                  p-5 flex items-center justify-between mt-8
              `,
				children: [
					// Left (icon + texts)
					El({
						element: "div",
						className: "flex items-center gap-4",
						children: [
							// Icon Circle
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
										innerText: "office",
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

					// Right Edit Icon
					El({
						element: "div",
						className:
							" w-5 h-5 border border-black rounded-full  flex justify-center items-center ",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									selectItems(e);
								},
							},
						],
						children: [
							El({
								element: "div",
								className: "select bg-black w-3 h-3 rounded-[50%] hidden ",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className: `
                  w-full bg-white rounded-2xl shadow-sm 
                  p-5 flex items-center justify-between mt-8
              `,
				children: [
					// Left (icon + texts)
					El({
						element: "div",
						className: "flex items-center gap-4",
						children: [
							// Icon Circle
							El({
								element: "div",
								className: `
                                  w-12 h-12 rounded-full bg-gray-100 
                                  flex items-center justify-center
                              `,
								children: [
									El({
										element: "img",
										src: "/public/assets/images/location-svgrepo-com.svg", // مسیر آیکون را خودت بزار
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
										innerText: "Parent House",
									}),
									El({
										element: "span",
										className: "text-gray-500 text-[14px]",
										innerText: "61480 Sunbrok Park PC 5679", // آدرس خالی
									}),
								],
							}),
						],
					}),

					// Right Edit Icon
					El({
						element: "div",
						className:
							" w-5 h-5 border border-black rounded-full  flex justify-center items-center ",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									selectItems(e);
								},
							},
						],
						children: [
							El({
								element: "div",
								className: "select bg-black w-3 h-3 rounded-[50%] hidden ",
							}),
						],
					}),
				],
			}),
			El({
				element: "button",
				innerText: "Add New Address",
				className: "w-full bg-gray-300 mt-8 py-4 rounded-full font-semibold",
			}),
		],
	});
}
