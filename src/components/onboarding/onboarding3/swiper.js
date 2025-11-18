import { Swiper1 } from "./swiper1";
import { Swiper2 } from "./swiper2";
import { Swiper3 } from "./swiper3";

export function Swiper() {
	const container = document.createElement("div");
	container.innerHTML;

	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
