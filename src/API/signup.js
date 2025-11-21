import { BASE_URL } from "./BASE_URL";
import { Login } from "../components/signup/login";
export async function signup() {
	const userSignup = document.querySelector("#userName-Signup");
	const passSignup = document.querySelector("#password-signup");
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
		console.log(data);

		if (response.ok) {
			alert("sign up sucess full ! please click on login btn and login here");
			// AuthenticationDiv.innerHTML = "";
			// AuthenticationDiv.appendChild(Login());
		} else {
			alert(data.message);
		}
	} catch {
		console.log("eror");
	}
	userSignup.value = "";
	passSignup.value = "";
	signupBtn.classList.add("pointer-events-none");
	signupBtn.classList.add("opacity-50");
}
