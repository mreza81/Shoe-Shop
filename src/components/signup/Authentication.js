import { signup } from "../../API/signup";
import { Login } from "./login";
import { Signup } from "./signup";

export function Authentication() {
	let AuthenticationDiv = document.createElement("div");
	AuthenticationDiv.setAttribute("id", "AuthenticationDiv");
	const signupEl = Signup();
	AuthenticationDiv.appendChild(signupEl);

	setTimeout(() => {
		// ---------------------signup page events------------------------------------------

		const userSignup = document.querySelector("#userName-Signup");
		const passSignup = document.querySelector("#password-signup");
		const signupBtn = document.getElementById("signup-btn");
		const loginSpan = document.getElementById("login-span");

		// --------------------disable/enable signup btn---------------------
		function checkInputsSignup() {
			if (userSignup.value.length > 0 && passSignup.value.length > 0) {
				signupBtn.classList.remove("opacity-50");
				signupBtn.classList.remove("pointer-events-none");
			} else {
				signupBtn.classList.add("opacity-50");
				signupBtn.classList.add("pointer-events-none");
			}
		}
		userSignup.addEventListener("input", checkInputsSignup);
		passSignup.addEventListener("input", checkInputsSignup);
		// -----------------------------------------------------------------
		// ------------------------signup btn-------------------------------
		// signupBtn.addEventListener("click", (e) => {
		// 	e.preventDefault;
		// 	signup();
		// });
		// -----------------------------------------------------------------
		//---------------------go to login page----------------------------
		loginSpan.addEventListener("click", (e) => {
			AuthenticationDiv.innerHTML = "";
			const loginEl = Login();
			AuthenticationDiv.appendChild(loginEl);
			// -----------------login page events-----------------------------------------------
			const userLogin = document.getElementById("user-login");
			const passLogin = document.getElementById("password-login");
			const loginBtn = document.getElementById("signin-btn");
			const signupSpan = document.getElementById("signup-span");

			// ----------------enable/disable login btn-----------------------
			function checkInputslogin() {
				if (userLogin.value.length > 0 && passLogin.value.length > 0) {
					loginBtn.classList.remove("opacity-50");
					loginBtn.classList.remove("pointer-events-none");
				} else {
					loginBtn.classList.add("opacity-50");
					loginBtn.classList.remove("pointer-events-none");
				}
			}
			userLogin.addEventListener("input", checkInputslogin);
			passLogin.addEventListener("input", checkInputslogin);
			// -------------------go to signup page-----------------------------
			signupSpan.addEventListener("click", (e) => {
				AuthenticationDiv.innerHTML = "";
				AuthenticationDiv.appendChild(signupEl);
			});
			// ---------------------------------------------------------------
		});
		// -----------------------------------------------------------------

		// -----------------------------------------------------------------------------------
	}, 0);

	return AuthenticationDiv;
}
