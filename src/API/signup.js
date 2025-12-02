import { router } from "../utils/router";
import { BASE_URL } from "./BASE_URL/BASE_URL";
export async function signupAPI() {
	const userSignup = document.querySelector("#userName-Signup");
	const passSignup = document.querySelector("#password-signup");
	const validation = document.getElementById("signup-validation");
	// const AuthenticationDiv = document.getElementById("AuthenticationDiv");
	const userName = userSignup.value.trim();
	const password = passSignup.value.trim();
	const signupBtn = document.getElementById("signup-btn");
	try {
		const response = await fetch(`${BASE_URL}/auth/signup`, {
			method: "POST",
			body: JSON.stringify({ username: userName, password: password }),
			headers: { "Content-Type": "application/json; charset=UTF-8" },
		});
		const data = await response.json();

		if (response.ok) {
			validation.innerHTML = "sign up sucess full ! please login btn";
			validation.classList.add("text-green");
			router.navigate("/login");
		} else {
			validation.innerHTML = `${data.message}`;
			validation.classList.add("text-red-500");
		}
	} catch {
		throw new Error(Error);
	}
	userSignup.value = "";
	passSignup.value = "";
	signupBtn.classList.add("pointer-events-none");
	signupBtn.classList.add("opacity-50");
}
