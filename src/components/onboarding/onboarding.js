import Swiper from "swiper";
import { Onboarding1 } from "./onboarding1.js";
import { Onboarding2 } from "./onboarding2.js";
import { Slider } from "./onboarding3/Slider.js";

export function Onboarding() {
	const container = document.createElement("div");
	const first = Onboarding1();
	const secound = Onboarding2();
	const third = Slider();
	container.appendChild(first);
	setTimeout(() => {
		container.innerHTML = "";
		container.appendChild(secound);
	}, 3000);
	setTimeout(() => {
		container.innerHTML = "";
		container.appendChild(third);

		var swiper = new Swiper(".mySwiper", {
			cssMode: true,

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
			},
			mousewheel: true,
			keyboard: true,
			initialSlide: 0,
		});
		// setTimeout(() => {
		// 	const nextBtn = third.querySelector(".swiper-button-disabled");
		// 	nextBtn.addEventListener(
		// 		"click",
		// 		() => {
		// 			console.log("Get Started clicked!");
		// 		},
		// 		0
		// 	);
		// });

		setTimeout(() => {
			const containerEl = third.querySelector(".swiper");
			if (containerEl) {
				containerEl.scrollLeft = 0;
			}

			const wrapper = third.querySelector(".swiper-wrapper");
			if (wrapper) wrapper.scrollLeft = 0;
		}, 50);
	}, 6000);

	return container;
}
