import { getGreeting, getUserName } from "../../../js/welcome";
import { El } from "../../utils/el";

export function HomeEl() {
	return El({
		element: "div",
		className: "home-container px-6",
		children: [
			El({
				element: "div",
				className: "home-header h-20 flex justify-between items-center",
				children: [
					El({
						element: "div",
						className: "welcome w-[160px] h-12",
						children: [
							El({
								element: "p",
								innerText: getGreeting(),
								className: "text-4 font-medium text-[#757475]",
							}),
							El({
								element: "p",
								innerText: getUserName(),
								className: "text-4 font-bold text-[#152536] mt-2.5",
							}),
						],
					}),
					El({
						element: "div",
						className: " flex justify-center items-center gap-4 mt-[7px]",
						children: [
							El({
								element: "img",
								className: "w-6 h-6",
								src: "public/assets/images/bell.svg",
							}),
							El({
								element: "img",
								className: "w-6 h-6",
								src: "public/assets/images/heart.svg",
							}),
						],
					}),
				],
			}),
			El({
				element: "input",
				type: "text",
				className:
					"w-full h-[37px] bg-[#FAFAFA] mt-6 px-[34px] rounded-1 text-[14px] cursor-pointer",
				placeholder: "Search",
			}),
			El({
				element: "img",
				className: "absolute left-9 top-[114px]",
				src: "public/assets/images/search.svg",
			}),
			El({
				element: "div",
				className: "mt-[30px] flex justify-between items-center",
				children: [
					El({
						element: "p",
						className: "text-[20px] font-semibold text-[#152536]",
						innerText: "Most Popular",
					}),
					El({
						element: "p",
						className: "text-4 font-semibold text-[#152536]",
						innerText: "See All",
					}),
				],
			}),
			El({
				element: "div",
				className:
					"brands flex justify-start items-center gap-3 mt-5 -mr-[23px] overflow-scroll no-scrollbar ",
				children: [
					El({
						element: "button",
						type: "button",
						className:
							"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer  ",
						innerText: "All",
					}),
					El({
						element: "button",
						type: "button",
						className:
							"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer ",
						innerText: "Nike",
					}),
					El({
						element: "button",
						type: "button",
						className:
							"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer ",
						innerText: "Adidas",
					}),
					El({
						element: "button",
						type: "button",
						className:
							"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer",
						innerText: "Puma",
					}),
					El({
						element: "button",
						type: "button",
						className:
							"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer ",
						innerText: "Asics",
					}),
					El({
						element: "button",
						type: "button",
						className:
							"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer ",
						innerText: "NewBalance",
					}),
				],
			}),
			El({
				element: "div",
				id: "items-div",
				className:
					"mt-6 grid grid-cols-2 gap-x-4 gap-y-6 h-[470px] overflow-y-scroll no-scrollbar",
				children: [
					// El({
					// 	element: "div",
					// 	className: "item w-[182px] h-[244px] p-0 ",
					// 	id: "",
					// 	children: [
					// 		El({
					// 			element: "div",
					// 			className:
					// 				"item-img-div bg-[#F3F3F3] w-full h-[182px] rounded-3xl",
					// 			children: [
					// 				El({
					// 					element: "img",
					// 					className: "item-img",
					// 					src: "",
					// 					id: "",
					// 				}),
					// 			],
					// 		}),
					// 		El({
					// 			element: "div",
					// 			className:
					// 				"item-p-div max-w-[182px] flex flex-col justify-start gap-2",
					// 			children: [
					// 				El({
					// 					element: "p",
					// 					className:
					// 						"item-name font-bold text-5 text-[#152536] leading-[100%]",
					// 					innerText: "",
					// 				}),
					// 				El({
					// 					element: "p",
					// 					className:
					// 						"item-price font-semibold text-4 text-[#152536] leading-[100%]",
					// 					innerText: "",
					// 				}),
					// 			],
					// 		}),
					// ],
					// }),
				],
			}),
			El({
				element: "p",
				className: "ml-[91px] text-3.5 font-semibold tracking-[-4%]  mt-[54px]",
				innerText: "Infinity Scrolling for pagination",
			}),
			El({
				element: "div",
				className:
					"home-footer flex justify-around items-center max-h-[66px] py-3 fixed bottom-0 left-6 right-6",
				children: [
					El({
						element: "div",
						className: "flex flex-col justify-center items-center gap-.5",
						id: "home-footer-home",
						children: [
							El({
								element: "img",
								className: "",
								src: "public/assets/images/house-door-fill.png",
							}),
							El({
								element: "p",
								className:
									"text-[10px] font-semibold text-[#152536] tracking-[-4%]",
								innerText: "Home",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col justify-center items-center gap-.5",
						id: "home-footer-cart",
						children: [
							El({
								element: "img",
								className: "",
								src: "public/assets/images/bag.png",
							}),
							El({
								element: "p",
								className:
									"text-[10px] font-semibold text-[#152536] tracking-[-4%]",
								innerText: "Cart",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col justify-center items-center gap-.5",
						id: "home-footer-Orders",
						children: [
							El({
								element: "img",
								className: "",
								src: "public/assets/images/cart2.png",
							}),
							El({
								element: "p",
								className:
									"text-[10px] font-semibold text-[#152536] tracking-[-4%]",
								innerText: "Orders",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col justify-center items-center gap-.5",
						id: "home-footer-wallet",
						children: [
							El({
								element: "img",
								className: "",
								src: "public/assets/images/wallet2.png",
							}),
							El({
								element: "p",
								className:
									"text-[10px] font-semibold text-[#152536] tracking-[-4%]",
								innerText: "Wallet",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col justify-center items-center gap-.5",
						id: "home-footer-profile",
						children: [
							El({
								element: "img",
								className: "",
								src: "public/assets/images/person.png",
							}),
							El({
								element: "p",
								className:
									"text-[10px] font-semibold text-[#152536] tracking-[-4%]",
								innerText: "Profile",
							}),
						],
					}),
				],
			}),
		],
	});
}
