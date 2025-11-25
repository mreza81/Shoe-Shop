import { El } from "../../utils/el";

export function cardEl() {
	const card = El({
		element: "div",
		className: "card-container  mt-[31px]",
		children: [
			El({
				element: "div",
				className: "card-header flex justify-between items-center mx-6",
				children: [
					El({
						element: "div",
						className: "flex justify-center items-center gap-5",

						children: [
							El({
								element: "img",
								src: "public/assets/images/logo.png",
								className: "header-icon w-4 h-6 ",
							}),
							El({
								element: "p",
								innerText: "My Cart",
								className: "font-inter-bold text-[23px]",
							}),
						],
					}),
					El({
						element: "img",
						src: "public/assets/images/search-svgrepo-com.svg",
						className: "cursor-pointer w-8",
					}),
				],
			}),
			El({
				element: "div",
				className: "card-items-div mx-6",
			}),
			El({
				element: "div",
				className:
					"page-footer mt-[680px] h-[180px] w-full bg-white rounded-t-[32px] border-t border-gray-200 shadow-xl shadow-black/10 ",
				children: [
					El({
						element: "div",
						className:
							"footer-top flex justify-between items-center mt-5 mx-5 ",
						children: [
							El({
								element: "div",
								className: "top-left flex flex-col justify-start",
								children: [
									El({
										element: "p",
										innerText: "Total price ",
										className:
											" text-[#5f5d5d] text-[16px] font-inter-semibold",
									}),
									El({
										element: "p",
										innerText: "$585.00",
										className: " text-black text-[25px] font-inter-bold",
									}),
								],
							}),
							El({
								element: "button",
								className:
									"w-[260px] bg-black text-white h-[65px] rounded-full flex justify-center items-center gap-4 cursor-pointer shadow-2xl",
								children: [
									El({
										element: "p",
										innerText: "Checkout",
										className: "text-white font-inter-semibold text-[19px] ",
									}),
									El({
										element: "img",
										src: "public/assets/images/right-arrow-svgrepo-com (2).svg",
										className: "w-4 h-4 mt-1",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "",
					}),
				],
			}),
		],
	});

	return card;
}
