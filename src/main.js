import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { OnboardingPage } from "./pages/onboardingPage.js";
Swiper.use([Navigation, Pagination]);
import "./style.css";
import { router } from "./utils/router.js";
import { AuthenticationpPage } from "./pages/AuthenticationPage.js";
import { HomePage } from "./pages/homePage.js";

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
container.append(OnboardingPage());

router.addRoute("/onboarding", OnboardingPage);
router.addRoute("/signup", AuthenticationpPage);
router.addRoute("/", HomePage);
router.init(container);

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
