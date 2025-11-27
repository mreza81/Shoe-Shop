import { searchedItems } from "../../API/search/searchedItems";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { recentSearch } from "./recentSearch";

export function searchEl() {
	const search = El({
		element: "div",
		className: "search container px-6 h-[926px] ",
		children: [
			El({
				element: "img",
				src: "public/assets/images/back.png",
				className: "absolute left-6 top-6 z-99 cursor-pointer",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate(sessionStorage.getItem("route"));
						},
					},
				],
			}),
			El({
				element: "input",
				type: "text",
				placeholder: "Enter Item Name",
				id: "input-searchPage",
				className:
					"input-searchPage w-full h-[55px] bg-[#FAFAFA] mt-[55px] px-[50px] rounded-2xl text-[16px] font-inter-semibold cursor-pointer border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black",
				eventListener: [
					{
						event: "focus",
						callback: (e) => {
							const img = document.getElementById("search-icon");
							const img2 = document.getElementById("filter-icon");

							img.classList.add("opacity-100");

							// img2.classList.add("opacity-100");
						},
					},
					{
						event: "blur",
						callback: () => {
							const img = document.getElementById("search-icon");
							const img2 = document.getElementById("filter-icon");
							img.classList.remove("opacity-100");
							img.classList.add("opacity-60");
							// img2.classList.remove("opacity-100");
							// img2.classList.add("opacity-30");
						},
					},
					{
						event: "input",
						callback: searchedItems,
					},
				],
			}),
			El({
				element: "img",
				className: "absolute left-9 top-[72px] w-7 h-5 opacity-50",
				src: "public/assets/images/search-svgrepo-com.svg",
				id: "search-icon",
			}),
			El({
				element: "img",
				className: "absolute right-9 top-[72px] w-5 h-5 opacity-100",
				src: "public/assets/images/filter-svgrepo-com.svg",
				id: "filter-icon",
				eventListener: [
					{
						event: "click",
						callback: recentSearch,
					},
				],
			}),
			// El({
			// 	element: "div",
			// 	className: "flex items-center justify-between mt-7",
			// 	children: [
			// 		El({
			// 			element: "p",
			// 			innerText: "Recent",
			// 			className: "font-inter-bold text-[21px]",
			// 		}),
			// 		El({
			// 			element: "p",
			// 			innerText: "Clear All",
			// 			className: "font-inter-bold text-[17px]",
			// 			eventListener: [
			// 				{
			// 					event: "click",
			// 					callback: (e) => {
			// 						localStorage.removeItem("recent-search");
			// 						const container = document.getElementById(
			// 							"resultSearch-container"
			// 						);
			// 						container.innerHTML = "";
			// 					},
			// 				},
			// 			],
			// 		}),
			// 	],
			// }),

			El({
				element: "div",
				className: "resultSearch-container  w-full",
				id: "resultSearch-container",
			}),
			El({
				element: "img",
				src: "public/assets/images/Doc.png",
				className: "mt-20 hidden",
				id: "not-found-img",
			}),
			El({
				element: "div",
				className: "flex flex-col justify-center items-center hidden",
				id: "not-found-div",

				children: [
					El({
						element: "div",
						innerText: "Not Found",
						className: "font-inter-bold text-[25px]",
					}),
					El({
						element: "div",
						innerText:
							"Sorry, the keyword you entered cannot be found, please check again or search with another keyword.",
						className: "font-inter-semibold text-[20px]",
					}),
				],
			}),
		],
	});
	return search;
}
