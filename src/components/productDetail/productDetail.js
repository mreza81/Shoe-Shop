import { getProductDetail } from "../../API/productDetail/getProduct";
import { colorOfProduct, sizeOfProduct } from "./colorsAndSize";
import { productDetailEl } from "./productDetailEl";

export function productDetail() {
	const token = localStorage.getItem("token");

	const container = document.createElement("div");
	container.textContent = "Loading...";

	getProductDetail()
		.then((data) => {
			container.innerHTML = "";

			const UI = productDetailEl(data);
			container.appendChild(UI);
			sizeOfProduct();
			colorOfProduct();

			// disable scrollbar
			const brand = document.querySelector(".colors");

			let isDown = false;
			let startX;
			let scrollLeft;

			brand.addEventListener("mousedown", (e) => {
				isDown = true;
				brand.classList.add("active");
				startX = e.pageX - brand.offsetLeft;
				scrollLeft = brand.scrollLeft;
			});

			brand.addEventListener("mouseleave", () => {
				isDown = false;
			});

			brand.addEventListener("mouseup", () => {
				isDown = false;
			});

			brand.addEventListener("mousemove", (e) => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - brand.offsetLeft;
				const walk = (x - startX) * 1.5;
				brand.scrollLeft = scrollLeft - walk;
			});

			// تاچ‌پد / موبایل
			brand.addEventListener("touchstart", (e) => {
				startX = e.touches[0].clientX;
				scrollLeft = brand.scrollLeft;
			});

			brand.addEventListener("touchmove", (e) => {
				const x = e.touches[0].clientX;
				const walk = (x - startX) * 2;
				brand.scrollLeft = scrollLeft - walk;
			});
		})
		.catch((err) => {
			console.error("ERROR IN productDetail():", err);
			container.textContent = "Error loading product detail.";
		});

	return container;
}
