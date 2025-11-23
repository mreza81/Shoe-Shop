import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { AuthenticationpPage } from "./pages/AuthenticationPage.js";
import { HomePage } from "./pages/homePage.js";
import { OnboardingPage } from "./pages/onboardingPage.js";
import "./style.css";
import { router } from "./utils/router.js";
Swiper.use([Navigation, Pagination]);

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
container.append(OnboardingPage());

router.addRoute("/", HomePage);
router.addRoute("/onboarding", OnboardingPage);
router.addRoute("/signup", AuthenticationpPage);
router.init(container);
