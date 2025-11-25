import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { HomePage } from "./pages/homePage.js";
import { OnboardingPage } from "./pages/onboardingPage.js";
import "./style.css";
import { router } from "./utils/router.js";
import { signupPage } from "./pages/signUpPage.js";
import { loginPage } from "./pages/loginPage.js";
import { productDetailPage } from "./pages/productDetailPage.js";
import { sizeOfProduct } from "./components/productDetail/colorsAndSize.js";
import { store } from "./utils/store.js";
Swiper.use([Navigation, Pagination]);

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);

router.addRoute("/", HomePage);
router.addRoute("/onboarding", OnboardingPage);
router.addRoute("/signup", signupPage);
router.addRoute("/login", loginPage);
router.addRoute("/product-detail", productDetailPage);

router.init(container);

// localStorage.removeItem("token");
// localStorage.removeItem("onboarding");
