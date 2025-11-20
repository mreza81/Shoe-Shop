import { Login } from "./login";
import { Signup } from "./signup";

export function Authentication() {
	let AuthenticationDiv = document.createElement("div");
	AuthenticationDiv.appendChild(Login());

	return AuthenticationDiv;
}
