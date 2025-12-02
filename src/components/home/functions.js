export function openModalHome() {
	const overLay = document.querySelector(".profile-overlay");
	const modal = document.querySelector(".profile-modal");
	modal.classList.remove("hidden");
	overLay.classList.remove("hidden");
	modal.classList.add("visible");
	overLay.classList.add("visible");
	setTimeout(() => {
		overLay.classList.add("opacity-75");
		modal.classList.add("opacity-100");
	}, 30);
}

export function closeModalHome() {
	const overLay = document.querySelector(".profile-overlay");
	const modal = document.querySelector(".profile-modal");
	modal.classList.remove("visible");
	overLay.classList.remove("visible");
	modal.classList.add("hidden");
	overLay.classList.add("hidden");
	setTimeout(() => {
		setTimeout(() => {
			overLay.classList.remove("opacity-75");
			modal.classList.remove("opacity-100");
		}, 10);
	});
}
