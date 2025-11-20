import { Login } from "./login";
import { Signup } from "./signup";

export function Authentication() {
	let AuthenticationDiv = document.createElement("div");
	const signupEl = Signup();
	AuthenticationDiv.appendChild(signupEl);

	setTimeout(() => {
		const userSignup = document.querySelector("#userName-Signup");
		const passSignup = document.querySelector("#password-signup");
		const signupBtn = document.getElementById("signup-btn");
		// console.log(passSignup);
		function checkInputs() {
			if (userSignup.value.length > 0 && passSignup.value.length > 0) {
				signupBtn.classList.remove("opacity-50");
			} else {
				signupBtn.classList.add("opacity-50");
			}
		}
		userSignup.addEventListener("input", checkInputs);
		passSignup.addEventListener("input", checkInputs);
	}, 0);

	return AuthenticationDiv;
}
