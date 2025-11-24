import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function getProductDetail() {
	const itemId = sessionStorage.getItem("item-id");
	const token = localStorage.getItem("token");

	try {
		const res = await fetch(`${BASE_URL}/sneaker/item/${itemId}`, {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await res.json();
		console.log(data);

		return data;
	} catch {
		throw new Error(Error);
	}
}
