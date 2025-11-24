import { getProductDetail } from "../../API/productDetail/getProduct";
import { El } from "../../utils/el";

export async function sizeOfProduct() {
	try {
		if (window.location.pathname !== "/product-detail") return;

		const data = await getProductDetail();
		const sizes = data.sizes.split("|");

		const container = document.querySelector(".sizes");
		if (!container) return;

		sizes.forEach((element) => {
			const size = El({
				element: "div",
				innerText: element,
				className:
					"size-btn bg-white cursor-pointer border-2 border-zinc-600 font-semibold text-zinc-600 flex justify-center items-center rounded-full w-10 h-10 font-sans  text-[15px] mt-2",
				eventListener: [
					{
						event: "click",
						callback: (e) => {
							const sizeBtn = document.querySelectorAll(".size-btn");
							sizeBtn.forEach((item) => {
								item.classList.remove("bg-black");
								item.classList.remove("text-zinc-600");
							});
							const btn = e.currentTarget;
							console.log(btn);
							btn.style.background = "black";
							btn.style.color = "white";
						},
					},
				],
			});
			container.appendChild(size);
		});
	} catch {
		console.log("cant upload item sizes");
	}
}

export async function colorOfProduct() {
	try {
		if (window.location.pathname !== "/product-detail") return;

		const data = await getProductDetail();
		const container = document.querySelector(".colors");

		const colors = data.colors.split("|");
		console.log(colors);

		colors.forEach((item) => {
			const color = El({
				element: "div",

				className: "size-btn cursor-pointer  rounded-full min-w-10 h-10  mt-2",
			});
			// if (item == "white") {
			// 	color.style.backgroundColor = "red";
			// }
			color.style.backgroundColor = item;

			container.appendChild(color);
		});
	} catch {}
}
