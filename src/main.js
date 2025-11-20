import "./style.css";
import { SignupPage } from "./pages/signup";
import { router } from "./utils/router";

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
router.addRoute("/signup", SignupPage);
router.init(container);
