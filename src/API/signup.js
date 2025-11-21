import { BASE_URL } from "./BASE_URL";

export async function signup() {
	const userSignup = document.querySelector("#userName-Signup");
	const passSignup = document.querySelector("#password-signup");
	const userName = userSignup.value;
	const password = passSignup.value;
	try {
		const response = await fetch(`${BASE_URL}/auth/signup`, {
			method: "POST",
			body: JSON.stringify({ username: userName, password: password }),
			headers: { "Content-Type": "application/json; charset=UTF-8" },
		});
		const data = await response.json();
		console.log(data);

		if (response.ok) {
			alert("sign up sucess full ! please login");
		} else {
			alert(data.message);
		}
	} catch {
		console.log("eror");
	}
	userSignup.value = "";
	passSignup.value = "";
}
