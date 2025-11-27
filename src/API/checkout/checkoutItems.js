import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function showCheckoutCart() {
	const token = localStorage.getItem("token");
	const itemsDiv = document.getElementById("checkout-cards");
	const Amount = document.getElementById("Amount");

	const res = await fetch(`${BASE_URL}/cart`, {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	if (!res.ok) {
		if (res.status === 401 || res.status === 403) {
			localStorage.removeItem("token");
			alert("your time is ended! please login again ");
			router.navigate("/login");
			return;
		}
	}
	itemsDiv.innerHTML = "";
	const data = await res.json();
	data.forEach((item) => {
		const cards = El({
			element: "div",
			className:
				"cart bg-white border border-gray-200 rounded-3xl  shadow-gray-200 p-4 flex justify-start items-center gap-4 ",
			id: `cart-${item.id}`,

			children: [
				El({
					element: "img",
					src: item.sneaker.imageURL,
					className:
						"min-w-[126px] max-w-[126px] rounded-3xl min-h-[126px] max-h-[126px]",
				}),
				El({
					element: "div",
					className: "cart-right-div flex flex-col justify-start gap-4 ",
					children: [
						El({
							element: "div",
							className:
								"right-top flex justify-between items-center min-w-[210px] ",
							children: [
								El({
									element: "p",
									className:
										"max-w-[170px] font-inter-bold whitespace-nowrap truncate ",
									innerText: item.sneaker.name,
								}),
							],
						}),
						El({
							element: "div",
							className:
								"right-center flex justify-start items-center gap-2.5 ",
							children: [
								El({
									element: "div",
									className: `color w-4 h-4 rounded-full bg-black `,
								}),
								El({
									element: "div",
									innerText: `${item.sneaker.colors.split("|")[0]}`,
									className: `color   text-[14px] font-inter-semibold text-[#5f5d5d]`,
								}),
								El({
									element: "div",
									innerText: "|",
									className: `color  text-[13px] font-inter-semibold text-[#5f5d5d]`,
								}),
								El({
									element: "div",
									innerText: `Size=${item.sneaker.sizes.split("|")[0]} `,
									className: `color  text-[14px] font-inter-semibold text-[#5f5d5d]`,
								}),
							],
						}),
						El({
							element: "div",
							className:
								"right-bottom flex justify-between items-center min-w-[210px] max-w-[210px] ",
							children: [
								El({
									element: "div",
									className: "font-semibold text-[20px]",
									innerText: `$${item.sneaker.price * item.quantity}.00`,
								}),
								El({
									element: "div",
									className:
										"font-semibold text-[18px] rounded-[50%] w-9 h-9 flex justify-center items-center bg-gray-200",
									innerText: item.quantity,
								}),
							],
						}),
					],
				}),
			],
		});
		const sum = data.reduce((sum, item) => {
			return sum + Number(item.quantity) * Number(item.sneaker.price);
		}, 0);
		Amount.innerText = `$${sum},00`;

		itemsDiv.append(cards);
	});
}
