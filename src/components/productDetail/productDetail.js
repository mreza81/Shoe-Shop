import { getProductDetail } from "../../API/productDetail/getProduct";
import { productDetailEl } from "./productDetailEl";

export function productDetail() {
	const token = localStorage.getItem("token");

	if (!token) {
		alert("please signin!");
		router.navigate("/login");
	}

	const container = document.createElement("div");

	getProductDetail()
		.then((data) => {
			const UI = productDetailEl(data);
			container.innerHTML = "";
			container.appendChild(UI);
		})
		.catch(() => {
			container.textContent = "Error loading product detail.";
		});

	return container;
}
