import { router } from "../utils/router";
import { BASE_URL } from "./BASE_URL/BASE_URL";

export async function loginAPI() {
	const userLogin = document.querySelector("#user-login");
	const passLogin = document.querySelector("#password-login");
	const loginBtn = document.getElementById("signin-btn");
	const validation = document.getElementById("login-validation");

	const userName = userLogin.value;
	const password = passLogin.value;
	try {
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			body: JSON.stringify({ username: userName, password: password }),
			headers: { "Content-Type": "application/json; charset=UTF-8" },
		});
		const data = await response.json();

		if (response.ok) {
			localStorage.setItem("userName", data.user.username);
			localStorage.setItem("token", data.token);

			setTimeout(() => {
				router.navigate("/");
			}, 700);
		} else {
			validation.innerHTML = `${data.message}`;
			validation.classList.add("text-red-500");
		}
	} catch {
		throw new Error(Error);
	}
	userLogin.value = "";
	passLogin.value = "";
	loginBtn.classList.add("pointer-events-none");
	loginBtn.classList.add("opacity-50");
}
