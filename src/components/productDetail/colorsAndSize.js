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
								item.classList.remove("text-white");
							});
							const btn = e.target;
							console.log(btn);
							btn.classList.remove("bg-white");
							btn.classList.add("bg-black");
							btn.classList.remove("text-zinc-600");
							btn.classList.add("text-white");
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

		colors.forEach((item) => {
			const color = El({
				element: "div",

				className:
					"color-btn cursor-pointer visible rounded-full min-w-10 h-10  mt-2 flex justify-center items-center border-2 border-gray-200",

				children: [
					El({
						element: "img",
						src: "public/assets/images/check-svgrepo-com.svg",
						className: "check hidden w-7",
					}),
				],
				eventListener: [
					{
						event: "click",
						callback: (e) => {
							let check = document.querySelectorAll(".check");
							check.forEach((item) => {
								item.classList.add("hidden");
							});
							const checkImg = e.currentTarget.children[0];

							checkImg.classList.remove("hidden");
						},
					},
				],
			});

			color.style.backgroundColor = item;

			container.appendChild(color);
		});
	} catch {}
}
