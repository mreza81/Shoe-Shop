import { El } from "../../utils/el";
import { store } from "../../utils/store";

export function selectItems(e) {
	const select = document.querySelectorAll(".select");

	select.forEach((item) => {
		item.classList.add("hidden");
	});

	e.target.firstChild.classList.remove("hidden");
}

export function openModal() {
	const modal = document.getElementById("address-modal");

	const overlay = document.getElementById("address-ovelay");

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
	const modal = document.getElementById("address-modal");
	const overlay = document.getElementById("address-ovelay");
	modal.classList.remove("visible");
	overlay.classList.remove("visible");
	modal.classList.add("hidden");
	overlay.classList.add("hidden");

	setTimeout(() => {
		overlay.classList.remove("opacity-75");
		modal.classList.remove("opacity-100");
	}, 20);
}
export function addAdress() {
	const adressTitle = document.getElementById("address-title").value.trim();
	const adressDetail = document.getElementById("address-detail").value.trim();
	let addresses = JSON.parse(localStorage.getItem("address") || "[]");

	addresses.push({
		title: adressTitle,
		detail: adressDetail,
	});

	localStorage.setItem("address", JSON.stringify(addresses));

	document.getElementById("address-title").value = "";
	document.getElementById("address-detail").value = "";

	closeModal();
}
export function validateAddressForm() {
	const titleInput = document.getElementById("address-title");
	const detailInput = document.getElementById("address-detail");
	const button = document.getElementById("add-adress-Btn");

	if (!titleInput || !detailInput || !button) {
		console.warn("Inputs or button not found");
		return;
	}

	const title = titleInput.value.trim();
	const detail = detailInput.value.trim();

	if (title.length > 0 && detail.length > 0) {
		button.disabled = false;
		button.classList.remove("opacity-50");
		button.classList.add("opacity-100");
	} else {
		button.disabled = true;
		button.classList.add("opacity-50");
		button.classList.remove("opacity-100");
	}
}

export function addressRender() {
	let addresses = JSON.parse(localStorage.getItem("address") || "[]");
	const addressDiv = document.getElementById("addressDiv");

	addressDiv.innerHTML = "";
	addresses.forEach((item) => {
		const card = El({
			element: "div",
			className: `
					        w-full bg-white rounded-2xl shadow-sm
					        p-5 flex items-center justify-between mt-8
					    `,
			children: [
				// Left (icon + texts)
				El({
					element: "div",
					className: "flex items-center gap-4",
					children: [
						// Icon Circle
						El({
							element: "div",
							className: `
					                        w-12 h-12 rounded-full bg-gray-100
					                        flex items-center justify-center
					                    `,
							children: [
								El({
									element: "img",
									src: "/public/assets/images/location-svgrepo-com.svg",
									className: "w-9 h-9",
								}),
							],
						}),
						// Texts
						El({
							element: "div",
							className: "flex flex-col gap-1",
							children: [
								El({
									element: "span",
									className: "font-semibold text-[17px]",
									innerText: item.title,
								}),
								El({
									element: "span",
									className: "text-gray-500 text-[14px]",
									innerText: item.detail,
								}),
							],
						}),
					],
				}),
				El({
					element: "div",
					className: "flex justify-center items-center gap-4",
					children: [
						El({
							element: "img",
							src: "/public/assets/images/trash-bin-svgrepo-com.svg",
							className: "w-5 h-5 cursor-pointer",
							eventListener: [
								{
									event: "click",
									callback: () => {
										deleteAddress(item);
									},
								},
							],
						}),
						El({
							element: "div",
							className:
								" w-5 h-5 border border-black rounded-full  flex justify-center items-center cursor-pointer ",
							eventListener: [
								{
									event: "click",
									callback: (e) => {
										store.setState("addressTitle", item.title);
										store.setState("addressDetail", item.detail);
										selectItems(e);
									},
								},
							],
							children: [
								El({
									element: "div",
									className: "select bg-black w-3 h-3 rounded-[50%] hidden",
								}),
							],
						}),
					],
				}),
			],
		});
		addressDiv.append(card);
	});
}

function deleteAddress(item) {
	let addresses = JSON.parse(localStorage.getItem("address") || "[]");

	addresses = addresses.filter((addr) => {
		return !(addr.title === item.title && addr.detail === item.detail);
	});

	localStorage.setItem("address", JSON.stringify(addresses));

	addressRender();
}
