export function checkInputsSignup() {
	const signupBtn = document.getElementById("signup-btn");

	const userSignup = document.querySelector("#userName-Signup");
	const passSignup = document.querySelector("#password-signup");
	if (userSignup.value.length > 0 && passSignup.value.length > 0) {
		signupBtn.classList.remove("opacity-50");
		signupBtn.classList.remove("pointer-events-none");
	} else {
		signupBtn.classList.add("opacity-50");
		signupBtn.classList.add("pointer-events-none");
	}
}

export function checkInputsLogin() {
	const userLogin = document.getElementById("user-login");
	const passLogin = document.getElementById("password-login");
	const loginBtn = document.getElementById("signin-btn");
	if (userLogin.value.length > 0 && passLogin.value.length > 0) {
		loginBtn.classList.remove("opacity-50");
		loginBtn.classList.remove("pointer-events-none");
	} else {
		loginBtn.classList.add("opacity-50");
		loginBtn.classList.remove("pointer-events-none");
	}
}
