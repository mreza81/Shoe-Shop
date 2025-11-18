import { Onboarding1 } from "./onboarding1.js";
import { Onboarding2 } from "./onboarding2.js";
import { Swiper1 } from "./onboarding3/swiper1.js";
import { Swiper2 } from "./onboarding3/swiper2.js";

export function Onboarding() {
	// const container = document.createElement("div");
	// const first = Onboarding1();
	// const secound = Onboarding2();
	// container.appendChild(first);
	// setTimeout(() => {
	// 	container.innerHTML = "";
	// 	container.appendChild(secound);
	// }, 3000);
	// return container;
	return Swiper2();
}
