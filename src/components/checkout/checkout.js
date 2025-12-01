import { showCheckoutCart } from "../../API/checkout/checkoutItems";
import { checkoutEl } from "./checkoutEl";

export function checkout() {
	const checkout = checkoutEl();
	setTimeout(() => {
		showCheckoutCart();

		//-------------------------------------hide scrollbar-y-----------------------------------------------
		const box = document.querySelector("#checkout-container");
		let isDown = false;
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
	return checkout;
}
