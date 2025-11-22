import { El } from "../../utils/el";

export function Home() {
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
						className: "welcome w-[130px] h-12",
						children: [
							El({
								element: "p",
								innerText: "Good Morning 👋",
								className: "text-4 font-medium text-[#757475]",
							}),
							El({
								element: "p",
								innerText: "Saeed Dehghani",
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
					"brands flex justify-start items-center gap-3 mt-5 -mr-6 overflow-scroll no-scrollbar ",
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
				className: "mt-6",
				children: [
					El({
						element: "div",
					}),
				],
			}),
		],
	});
}
