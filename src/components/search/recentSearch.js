import { searchedItems } from "../../API/search/searchedItems";
import { El } from "../../utils/el";

export function recentSearch() {
	const allRecent = JSON.parse(localStorage.getItem("recent-search"));
	const recent = allRecent?.reverse().slice(0, 12);
	const container = document.getElementById("resultSearch-container");
	container.innerHTML = "";
	const header = El({
		element: "div",
		className: "flex flex-col",
		children: [
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
						className: "font-inter-bold text-[17px] cursor-pointer",

						eventListener: [
							{
								event: "click",
								callback: (e) => {
									localStorage.removeItem("recent-search");
									const container = document.getElementById(
										"resultSearch-container"
									);
									recentSearch();
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className: "w-full h-[1px]  bg-[#e1e1e1] mt-6 ",
			}),
		],
	});
	container.append(header);

	if (allRecent && allRecent.length > 0) {
		recent.forEach((element) => {
			console.log(element);

			const item = El({
				element: "div",
				className: "w-full mt-6 flex justify-between items-center",
				children: [
					El({
						element: "p",
						innerText: element,
						className:
							"text-[18px] text-gray-500 text-inter-semibold cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									searchedItems(e.target.innerText);
								},
							},
						],
					}),

					El({
						element: "img",
						className: "w-7 h-7 cursor-pointer",
						src: "public/assets/images/close-square-svgrepo-com (1).svg",
						eventListener: [
							{
								event: "click",
								callback: (e) => {
									const newRecent = recent.filter((item) => {
										return item !== element;
									});
									localStorage.setItem(
										"recent-search",
										JSON.stringify(newRecent)
									);
									recentSearch();
								},
							},
						],
					}),
				],
			});

			container.append(item);
		});

		return container;
	}
	const noRecent = El({
		element: "div",
		innerText: "No Recent Search",
		className:
			" w-full flex justify-center items-center text-[20px] font-inter-semibold mt-10",
	});
	container.append(noRecent);
}
