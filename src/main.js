import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
import { OnboardingPage } from "./pages/onboardingPage.js";
import "./style.css";

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
container.append(OnboardingPage());

Swiper;
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
});
// document.querySelectorAll(".swiper-button-next").forEach((button) => {
// 	button.innerHTML = "next";
// 	button.style.backgroundImage = "none";
// });
// setTimeout(() => {
// 	document
// 		.querySelectorAll(".swiper-button-next.swiper-button-disabled")
// 		.forEach((button) => {
// 			button.innerHTML = ""; // محتوای دکمه را پاک می‌کند
// 			button.style.display = "none"; // دکمه را مخفی می‌کند
// 			button.style.backgroundImage = "none"; // پس‌زمینه آیکون را حذف می‌کند
// 		});
// }, 500);
