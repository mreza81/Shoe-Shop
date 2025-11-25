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
					"page-footer mt-[670px] h-[190px] w-full bg-white rounded-t-[32px] border-t border-gray-200 shadow-xl shadow-black/10 ",
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
									"w-[260px] bg-black text-white h-[65px] rounded-full flex justify-center items-center gap-4 cursor-pointer shadow-xl",
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
						className:
							"footer-buttom mx-5 mt-10 flex justify-around items-center",
						children: [
							El({
								element: "div",
								className: "flex flex-col justify-center items-center gap-1",
								id: "home-footer-home",
								children: [
									El({
										element: "img",
										className: "w-[27px]",
										src: "public/assets/images/home.png",
									}),
									El({
										element: "p",
										className:
											"text-[13px] font-semibold text-[#152536] tracking-[-4%]",
										innerText: "Home",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col justify-center items-center gap-1",
								id: "home-footer-cart",
								children: [
									El({
										element: "img",
										className: "w-[25px] mt-[3px]",
										src: "public/assets/images/cart-select.png ",
									}),
									El({
										element: "p",
										className:
											"text-[13px] font-semibold text-[#152536] tracking-[-4%]",
										innerText: "Cart",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col justify-center items-center gap-1",
								id: "home-footer-Orders",
								children: [
									El({
										element: "img",
										className: "w-[25px] mt-[3px]",
										src: "public/assets/images/cart2.png",
									}),
									El({
										element: "p",
										className:
											"text-[13px] font-semibold text-[#152536] tracking-[-4%]",
										innerText: "Orders",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col justify-center items-center gap-1",
								id: "home-footer-wallet",
								children: [
									El({
										element: "img",
										className: "w-[23px] mt-[3px]",
										src: "public/assets/images/wallet2.png",
									}),
									El({
										element: "p",
										className:
											"text-[13px] font-semibold text-[#152536] tracking-[-4%]",
										innerText: "Wallet",
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col justify-center items-center gap-1",
								id: "home-footer-profile",
								children: [
									El({
										element: "img",
										className: "w-[25px] mt-[3px]",
										src: "public/assets/images/person.png",
									}),
									El({
										element: "p",
										className:
											"text-[13px] font-semibold text-[#152536] tracking-[-4%]",
										innerText: "Profile",
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});

	return card;
}
