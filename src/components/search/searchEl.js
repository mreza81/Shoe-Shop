import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function searchEl() {
	const search = El({
		element: "div",
		className: "search container px-6",
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
					"input-searchPage w-full h-[55px] bg-[#FAFAFA] mt-[55px] px-[50px] rounded-2xl text-[14px] cursor-pointer border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black",
				eventListener: [
					{
						event: "focus",
						callback: (e) => {
							const img = document.getElementById("search-icon");
							const img2 = document.getElementById("filter-icon");

							img.classList.add("opacity-100");

							img2.classList.add("opacity-100");
						},
					},
					{
						event: "blur",
						callback: () => {
							const img = document.getElementById("search-icon");
							const img2 = document.getElementById("filter-icon");
							img.classList.remove("opacity-100");
							img.classList.add("opacity-60");
							img2.classList.remove("opacity-100");
							img2.classList.add("opacity-30");
						},
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
				className: "absolute right-9 top-[72px] w-5 h-5 opacity-30",
				src: "public/assets/images/filter-svgrepo-com.svg",
				id: "filter-icon",
				eventListener: [
					{
						event: "click",
						callback: () => {
							const input = document.getElementById("input-searchPage");
						},
					},
				],
			}),
			El({
				element: "div",
				className: "flex items-center justify-between mt-7",
				children: [
					El({
						element: "p",
						innerText: "Recent",
						className: "font-inter-bold text-[21px]",
					}),
					El({
						element: "p",
						innerText: "Clear All",
						className: "font-inter-bold text-[17px]",
					}),
				],
			}),
			El({
				element: "div",
				className: "w-full h-[1px]  bg-[#e1e1e1] mt-6 ",
			}),
		],
	});
	return search;
}
