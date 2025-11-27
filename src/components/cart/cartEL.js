import { deleteCard } from "../../API/cart/deletecard";
import { showCart } from "../../API/cart/showCart";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { closeModal } from "./handleMdal";

export function cardEl() {
	sessionStorage.setItem("route", router.getCurrentRoute());
	const card = El({
		element: "div",
		className: "card-container pt-[31px] ",
		children: [
			El({
				element: "div",
				className: "card-header flex justify-between items-center mx-6 ",
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
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/search");
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"card-items-div mx-6 mt-8 flex flex-col gap-6 h-[638px] overflow-scroll no-scrollbar",
			}),
			El({
				element: "div",
				className:
					"page-footer mt-[0px] h-[190px] w-full bg-white rounded-t-[32px] border-t border-gray-200 shadow-xl shadow-black/10 ",
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
										innerText: "$0.00",
										className: " text-black text-[25px] font-inter-bold",
										id: "cart-totalPrice",
									}),
								],
							}),
							El({
								element: "button",
								className:
									"w-[260px] bg-black text-white h-[65px] rounded-full flex justify-center items-center gap-4 cursor-pointer shadow-xl",
								eventListener: [
									{
										event: "click",
									},
								],
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
								className:
									"flex flex-col justify-center items-center gap-1 cursor-pointer",
								id: "home-footer-home",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/");
										},
									},
								],
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
			El({
				element: "div",
				id: "card-overlay",
				className:
					"bg-gray-700  w-full h-[926px] fixed top-0 left-0 z-3 hidden opacity-0  transition-opacity duration-300",
			}),
			El({
				element: "div",
				id: "card-modal",
				className:
					" h-[420px] w-full bg-white rounded-t-[32px]  border-gray-200 shadow-xl hidden opacity-0 shadow-black/10 fixed z-4 bottom-0   transition-opacity duration-300 -translate-x -translate-y",
				children: [
					El({
						element: "div",
						className: "modal-container px-6 pt-3",
						children: [
							El({
								element: "div",
								className: "w-full flex justify-center items-center",
								children: [
									El({
										element: "div",
										className:
											"w-[40px] h-[3px]  bg-[#e1e1e1]  rounded-[50px]  ",
									}),
								],
							}),
							El({
								element: "div",
								innerText: "Remove From Cart?",
								className: "font-inter-bold text-center text-[23px] mt-6",
							}),
							El({
								element: "div",
								className: "w-full h-[1px]  bg-[#e1e1e1] mt-6 ",
							}),
							El({
								element: "div",
								className: "delet-cart mt-6",
								id: "delet-cart",
							}),
							El({
								element: "div",
								className: "w-full h-[1px]  bg-[#e1e1e1] mt-5  ",
							}),
							El({
								element: "div",
								className: "flex justify-between items-center mt-6",
								children: [
									El({
										element: "button",
										innerText: "Cancle",
										className:
											"w-[178px] h-[60px] bg-[#e1e1e1] rounded-full font-inter-bold text-[16px] cursor-pointer",
										eventListener: [
											{
												event: "click",
												callback: closeModal,
											},
										],
									}),
									El({
										element: "button",
										innerText: "Yes,Remove",
										className:
											"w-[178px] h-[60px] bg-[#000000] text-white rounded-full font-inter-bold text-[16px] cursor-pointer",
										eventListener: [
											{
												event: "click",
												callback: async () => {
													closeModal();
													await deleteCard();
													await showCart();
												},
											},
										],
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
