import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function brands() {
	const token = localStorage.getItem("token");
	const response = await fetch(`${BASE_URL}/sneaker/brands`, {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	console.log(data);
}
