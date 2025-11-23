import { El } from "../../utils/el";
import { BASE_URL } from "../BASE_URL/BASE_URL";
// import { getBrand } from "./getbrand";

export async function getAllBrands() {
	const token = localStorage.getItem("token");
	const itemsDiv = document.getElementById("items-div");

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
				"cursor-pointer h-[39px] px-5 text-4 font-semibold border-2 border-[#343A40] rounded-[25px] cursor:pointer whitespace-nowrap ",
			innerText: item,
			eventListener: [
				{
					event: "click",
					callback: async () => {
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
								return element.brand.toUpperCase() === item.toUpperCase();
							});
							console.log(filtredItems);
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
