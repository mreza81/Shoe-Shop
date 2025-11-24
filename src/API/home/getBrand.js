import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { BASE_URL } from "../BASE_URL/BASE_URL";



export async function getBrand() {
	const token = localStorage.getItem("token");
	const itemsDiv = document.getElementById("items-div");
	const btnAll = document.getElementById("all-Btn");

	const brandsDiv = document.getElementById("brands-btn-div");
	const response = await fetch(`${BASE_URL}/sneaker/brands`, {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	data.forEach((item) => {
		const Element = El({
			element: "button",
			type: "button",
			className:
				"filter-btn cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer whitespace-nowrap ",
			innerText: item,
			eventListener: [
				{
					event: "click",
					callback: (e) => {
						document.querySelectorAll(".filter-btn").forEach((btn) => {
							btn.classList.remove("bg-[#343A40]", "text-white");
						});
						const target = e.target;
						target.classList.add("bg-[#343A40]", "text-white");
					},
				},
				{
					event: "click",
					callback: async (e) => {
						itemsDiv.innerHTML = "";

						try {
							const res = await fetch(`${BASE_URL}/sneaker?page=1&limit=100`, {
								headers: {
									"Content-Type": "application/json; charset=UTF-8",
									Authorization: `Bearer ${token}`,
								},
							});
							const data = await res.json();
							const allItems = data.data;

							const filtredItems = allItems.filter((element) => {
								return element.brand === item;
							});
							filtredItems.forEach((item) => {
								const element = El({
									element: "div",
									className:
										"item w-[182px] h-[244px] p-0 flex flex-col justify-start gap-3 cursor-pointer ",
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
													element: "p",
													className:
														"item-price font-semibold text-4 text-[#152536] leading-[100%]",
													innerText: ` $ ${item.price}.00`,
												}),
											],
										}),
									],
								});

								itemsDiv.append(element);
							});
						} catch {
							throw new Error(Error);
						}
					},
				},
			],
		});
		brandsDiv.append(Element);
	});
}
