import "./style.css";
import { AuthenticationpPage } from "./pages/AuthenticationPage";
import { router } from "./utils/router";

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
router.addRoute("/signup", AuthenticationpPage);
router.init(container);
