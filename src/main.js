import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { OnboardingPage } from "./pages/onboardingPage.js";
Swiper.use([Navigation, Pagination]);

import "./style.css";
import { router } from "./utils/router.js";
import { AuthenticationpPage } from "./pages/AuthenticationPage.js";

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
container.append(OnboardingPage());

router.addRoute("/onboarding", OnboardingPage);
router.addRoute("/signup", AuthenticationpPage);
router.init(container);
localStorage.removeItem("user");
