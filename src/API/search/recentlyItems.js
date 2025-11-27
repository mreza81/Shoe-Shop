import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function reccentlyItems(item) {
	const token = localStorage.getItem("token");
	const container = document.getElementById("resultSearch-container");
	const notFoundImg = document.getElementById("not-found-img");
	const notFoundDiv = document.getElementById("not-found-div");
	const response = await fetch(
		`${BASE_URL}/sneaker?page=1&limit=100&search=${item}`,
		{
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	notFoundImg.classList.add("hidden");
	notFoundDiv.classList.add("hidden");
	const items = data.data;
	container.innerHTML = "";

	const header = El({
		element: "div",
		className: "flex justify-between items-center w-full mt-6",
		children: [
			El({
				element: "div",
				innerText: `Results for "${item}"`,
				className:
					"font-inter-bold text-[20px]  max-w-[200px] whitespace-nowrap truncate",
			}),
			El({
				element: "div",
				innerText: `${items.length} found`,
				className:
					"font-inter-bold text-[16px]  max-w-[200px] whitespace-nowrap truncate",
			}),
		],
	});
	container.append(header);
	const itemsDiv = El({
		element: "div",
		className:
			"overflow-scroll no-scrollbar justify-between gap-4 grid grid-cols-2 h-[737px] mt-6",
		id: "recently-items-div",
	});
	container.append(itemsDiv);
	items.forEach((item) => {
		const element = El({
			element: "div",
			className:
				"item w-[175px] h-[285px] p-0 flex flex-col justify-start gap-3 cursor-pointer",
			id: "",
			eventListener: [
				{
					event: "click",
					callback: () => {
						sessionStorage.setItem("item-id", `${item.id}`);
						router.navigate("/product-detail");
					},
				},
			],
			children: [
				El({
					element: "div",
					className: "item-img-div  rounded-3xl",
					children: [
						El({
							element: "img",
							className:
								"item-img rounded-3xl min-h-[182px] max-h-[182px] min-w-[182px] max-w-[182px]",
							src: `${item.imageURL}`,
							id: "",
						}),
					],
				}),
				El({
					element: "div",
					className:
						"item-p-div max-w-[182px] flex flex-col justify-start gap-2",
					children: [
						El({
							element: "p",
							className:
								"item-name font-bold text-5 text-[#152536] leading-[100%] truncate",
							innerText: `${item.name}`,
						}),
						El({
							element: "div",
							className: "flex flex-start items-center gap-2",
							children: [
								El({
									element: "img",
									className: "w-5.5",
									src: "public/assets/images/star-half-svgrepo-com.svg",
								}),
								El({
									element: "p",
									innerText: "4.3",
									className: "text-[#4b4b4b]",
								}),
								El({
									element: "div",
									className: "w-[2px] h-[13px] bg-[#4b4b4b] mt-1 ",
								}),
								El({
									element: "div",
									innerText: "5,371 sold",
									className:
										"font-medium text-[12px] bg-[#F3F3F3] flex justify-center items-center py-1 px-2 rounded-[7px] text-center mt-1",
								}),
							],
						}),
						El({
							element: "p",
							className:
								"item-price font-semibold text-4 text-[#152536] leading-[100%]",
							innerText: ` $ ${item.price}.00`,
						}),
					],
				}),
			],
		});
		itemsDiv.appendChild(element);
	});
	// scrollbar
	const box = document.querySelector("#recently-items-div");
	let isDown = false;

	let startY = 0;
	let scrollTop = 0;

	// Mouse Events
	box.addEventListener("mousedown", (e) => {
		isDown = true;
		startY = e.pageY - box.offsetTop;
		scrollTop = box.scrollTop;
	});

	box.addEventListener("mouseleave", () => {
		isDown = false;
	});

	box.addEventListener("mouseup", () => {
		isDown = false;
	});

	box.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const y = e.pageY - box.offsetTop;
		const walk = (y - startY) * 1.7;
		box.scrollTop = scrollTop - walk;
	});

	// Touch Events (موبایل و تاچ پد)
	box.addEventListener("touchstart", (e) => {
		startY = e.touches[0].clientY;
		scrollTop = box.scrollTop;
	});

	box.addEventListener("touchmove", (e) => {
		const y = e.touches[0].clientY;
		const walk = (y - startY) * 1.7;
		box.scrollTop = scrollTop - walk;
	});
}
