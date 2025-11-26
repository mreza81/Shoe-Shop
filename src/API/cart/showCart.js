import { openModal } from "../../components/cart/handleMdal";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function showCart() {
	const token = localStorage.getItem("token");
	const itemsDiv = document.getElementsByClassName("card-items-div")[0];
	const totalPrice = document.getElementById("cart-totalPrice");
	try {
		const res = await fetch(`${BASE_URL}/cart`, {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
		});
		itemsDiv.innerHTML = "";

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
					"cart bg-white border border-gray-200 rounded-3xl shadow-2xl shadow-gray-200 p-4 flex justify-start items-center gap-4 ",
				eventListener: [
					{
						event: "click",
						callback: () => {
							sessionStorage.setItem("item-id", `${item.sneaker.id}`);

							router.navigate("/product-detail");
						},
					},
				],
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
									El({
										element: "img",
										className: "trash h-5 w-5 cursor-pointer",
										src: "public/assets/images/trash-bin-svgrepo-com.svg",
										eventListener: [
											{
												event: "click",
												callback: (e) => {
													sessionStorage.setItem("cart-id", item.id);
													e.stopPropagation();
													openModal(item);
												},
											},
										],
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
										innerText: `$ ${item.quantity * item.sneaker.price}.00`,
										className: "font-inter-bold text-[18px] ",
									}),
									El({
										element: "div",
										className:
											" w-[83px] h-[33px]  bg-[#d8d8d8] px-5 rounded-full flex justify-center items-center gap-[10px] font-inter-bold ",
										children: [
											El({
												element: "img",
												src: "public/assets/images/heavyminussign-svgrepo-com(1).svg",
												className: "w-2",
											}),
											El({
												element: "span",
												className: "text-[14px]",
												innerText: item.quantity,
											}),
											El({
												element: "img",
												src: "public/assets/images/heavyplussign-svgrepo-com(1).svg",
												className: "w-2",
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			});

			itemsDiv.append(cards);
		});
		const sum = data.reduce((sum, item) => {
			return sum + Number(item.quantity) * Number(item.sneaker.price);
		}, 0);
		totalPrice.innerText = `$${sum},00`;
	} catch {
		throw new Error(Error);
	}
}
