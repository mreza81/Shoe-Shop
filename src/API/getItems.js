import { El } from "../utils/el";
import { router } from "../utils/router";
import { BASE_URL } from "./BASE_URL";

export async function getItems() {
	const token = localStorage.getItem("token");
	const itemsDiv = document.getElementById("items-div");

	const response = await fetch(`${BASE_URL}/sneaker?page=1&limit=100`, {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	const itemsArray = data.data;
	if (!itemsArray) {
		alert("your time is ended!!please login again");
		router.navigate("/signup");
	}

	itemsArray.forEach((item) => {
		const element = El({
			element: "div",
			className: "item w-[182px] h-[244px] p-0 ",
			id: "",
			children: [
				El({
					element: "div",
					className: "item-img-div bg-[#F3F3F3] w-full h-[182px] rounded-3xl",
					children: [
						El({
							element: "img",
							className: "item-img",
							src: "",
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
								"item-name font-bold text-5 text-[#152536] leading-[100%]",
							innerText: "aaa",
						}),
						El({
							element: "p",
							className:
								"item-price font-semibold text-4 text-[#152536] leading-[100%]",
							innerText: "",
						}),
					],
				}),
			],
		});
		itemsDiv.append(element);
	});
}
