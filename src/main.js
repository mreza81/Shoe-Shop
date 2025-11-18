import { OnboardingPage } from "./pages/onboardingPage.js";
import "./style.css";

const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);
container.append(OnboardingPage());
// console.log(OnboardingPage());
