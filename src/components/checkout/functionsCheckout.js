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
