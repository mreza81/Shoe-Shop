import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function getBrand() {
	const response = await fetch(`${BASE_URL}/sneaker?page=1&limit=100`, {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	const getBrand = data.data;
	console.log(getBrand);
}
