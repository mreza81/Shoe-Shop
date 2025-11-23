import { brands } from "../../API/home/brands";
import { getItems } from "../../API/home/getItems";
import { router } from "../../utils/router";
import { HomeEl } from "./HomeEl";

export function home() {
	const onboarding = localStorage.getItem("onboarding");
	const token = localStorage.getItem("token");

	if (!onboarding) {
		router.navigate("/onboarding");
	} else if (!token) {
		alert("please signin!");
		router.navigate("/signup");
	} else {
		const home = HomeEl();

		setTimeout(() => {
			brands();
			getItems();

			//-----------------------------------------hide scrollbar-x------------------------------------------------
			const brand = document.querySelector(".brands");

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
}
