import { showCart } from "../../API/cart/showCart";
import { cardEl } from "./cartEL";

export function cart() {
	const cart = cardEl();
	setTimeout(() => {
		showCart();

		//-------------------------------------hide scrollbar-y-----------------------------------------------
		const box = document.querySelector(".card-items-div");
		let isDown = false;
		let startX;
		let scrollLeft;
		let startY = 0;
		let scrollTop = 0;

		// Mouse Events
		box.addEventListener("mousedown", (e) => {
			isDown = true;
			startY = e.pageY - box.offsetTop;
			scrollTop = box.scrollTop;
		});

		box.addEventListener("mouseleave", () => {
			isDown = false;
		});

		box.addEventListener("mouseup", () => {
			isDown = false;
		});

		box.addEventListener("mousemove", (e) => {
			if (!isDown) return;
			e.preventDefault();
			const y = e.pageY - box.offsetTop;
			const walk = (y - startY) * 1.7;
			box.scrollTop = scrollTop - walk;
		});

		// Touch Events (موبایل و تاچ پد)
		box.addEventListener("touchstart", (e) => {
			startY = e.touches[0].clientY;
			scrollTop = box.scrollTop;
		});

		box.addEventListener("touchmove", (e) => {
			const y = e.touches[0].clientY;
			const walk = (y - startY) * 1.7;
			box.scrollTop = scrollTop - walk;
		});
	}, 0);
	return cart;
}
