import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function logout() {
	const token = localStorage.getItem("token");
	const res = await fetch(`${BASE_URL}/user`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
}
