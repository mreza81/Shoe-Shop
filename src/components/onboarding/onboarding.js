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
		// 2) بعد از اینکه اسلایدر کامل لود شد، reset واقعی بزن
		setTimeout(() => {
			const containerEl = third.querySelector(".swiper");
			if (containerEl) {
				containerEl.scrollLeft = 0;
			}
			// اگر wrapper وجود داشت scrollTop هم صفر کن برای اطمینان
			const wrapper = third.querySelector(".swiper-wrapper");
			if (wrapper) wrapper.scrollLeft = 0;
		}, 50); // ← مهم
	}, 6000);
	return container;
}
