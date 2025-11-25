import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { cartPage } from "./pages/cartPage.js";
import { HomePage } from "./pages/homePage.js";
import { loginPage } from "./pages/loginPage.js";
import { OnboardingPage } from "./pages/onboardingPage.js";
import { productDetailPage } from "./pages/productDetailPage.js";
import { signupPage } from "./pages/signUpPage.js";
import "./style.css";
import { router } from "./utils/router.js";
Swiper.use([Navigation, Pagination]);

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);

router.addRoute("/", HomePage);
router.addRoute("/onboarding", OnboardingPage);
router.addRoute("/signup", signupPage);
router.addRoute("/login", loginPage);
router.addRoute("/product-detail", productDetailPage);
router.addRoute("/cart", cartPage);

router.init(container);

// localStorage.removeItem("token");
// localStorage.removeItem("onboarding");
