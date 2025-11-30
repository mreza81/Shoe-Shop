import { store } from "../../utils/store";

export function openModal() {
	const modal = document.getElementById("checkout-modal");

	const overlay = document.getElementById("checkout-ovelay");
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
	modal.classList.add("visible");
	overlay.classList.add("visible");
	setTimeout(() => {
		overlay.classList.add("opacity-75");
		modal.classList.add("opacity-100");
	}, 30);
}

export function closeModal() {
	const modal = document.getElementById("checkout-modal");
	const overlay = document.getElementById("checkout-ovelay");
	modal.classList.remove("visible");
	overlay.classList.remove("visible");
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
	setTimeout(() => {
		setTimeout(() => {
			overlay.classList.remove("opacity-75");
			modal.classList.remove("opacity-100");
		}, 20);
	});
}

export function calculateOff() {
	const sumAndShip = store.getState("sumAndShip");
	let discount = 0;
	const totalDiv = document.getElementById("total");
	const display = document.getElementById("discount-display");
	const discountDiv = document.getElementById("discount-div");
	const promoDiv = document.getElementById("promo");
	const deletPromo = document.getElementById("delete-promo");

	totalDiv.innerHTML = "";

	const input = document.getElementById("promo-input");
	if (input.value == "gold") {
		discount = 20 / 100;
		discountDiv.classList.remove("hidden");
		display.innerHTML = "Discount 20% Off";
	} else if (input.value == "silver") {
		discount = 15 / 100;
		discountDiv.classList.remove("hidden");
		display.innerHTML = "Discount 15% off";
	} else if (input.value == "boronze") {
		discount = 10 / 100;
		discountDiv.classList.remove("hidden");
		display.innerHTML = "Discount 10% off";
	}

	const promo = Math.round(sumAndShip * discount);
	const totalPrice = Math.round(sumAndShip - promo);
	promoDiv.innerHTML = `-$${promo}.00`;
	totalDiv.innerHTML = `$${totalPrice}.00`;

	deletPromo.addEventListener("click", (e) => {
		discount = 0;
		discountDiv.classList.add("hidden");
		const promo = Math.round(sumAndShip * discount);
		const totalPrice = Math.round(sumAndShip - promo);
		promoDiv.innerHTML = `-$${promo}.00`;
		totalDiv.innerHTML = `$${totalPrice}.00`;
	});
}
