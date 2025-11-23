import { getItems } from "../../API/getItems";
import { HomeEl } from "./HomeEl";

export function home() {
	const home = HomeEl();
	setTimeout(() => {
		getItems();
		//-----------------------------------------hide scrollbar-x------------------------------------------------
		const brands = document.querySelector(".brands");

		let isDown = false;
		let startX;
		let scrollLeft;

		brands.addEventListener("mousedown", (e) => {
			isDown = true;
			brands.classList.add("active");
			startX = e.pageX - brands.offsetLeft;
			scrollLeft = brands.scrollLeft;
		});

		brands.addEventListener("mouseleave", () => {
			isDown = false;
		});

		brands.addEventListener("mouseup", () => {
			isDown = false;
		});

		brands.addEventListener("mousemove", (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - brands.offsetLeft;
			const walk = (x - startX) * 1.5;
			brands.scrollLeft = scrollLeft - walk;
		});

		// تاچ‌پد / موبایل
		brands.addEventListener("touchstart", (e) => {
			startX = e.touches[0].clientX;
			scrollLeft = brands.scrollLeft;
		});

		brands.addEventListener("touchmove", (e) => {
			const x = e.touches[0].clientX;
			const walk = (x - startX) * 2;
			brands.scrollLeft = scrollLeft - walk;
		});
		// ---------------------------------------------------------------------------------------------------
		//-------------------------------------hide scrollbar-y-----------------------------------------------
		const box = document.querySelector("#items-div");

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

	return home;
}
