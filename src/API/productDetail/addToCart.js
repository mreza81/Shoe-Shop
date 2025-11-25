import { store } from "../../utils/store";
import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function addToCard() {
	const id = sessionStorage.getItem("item-id");
	const token = localStorage.getItem("token");
	const quantity = store.getState(`counter${id}`);
	console.log(quantity, token);
	try {
		const res = await fetch(`${BASE_URL}/cart`, {
			method: "post",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				sneakerId: Number(id),
				quantity: quantity,
			}),
		});
		const data = await res.json();
		console.log(data);
	} catch {
		throw new Error("Eror to add card");
	}
}
