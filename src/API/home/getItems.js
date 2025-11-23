import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { BASE_URL } from "../BASE_URL/BASE_URL";

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
			className:
				"item w-[182px] h-[244px] p-0 flex flex-col justify-start gap-3 ",
			id: "",
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
}
