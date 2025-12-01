import { BASE_URL } from "../BASE_URL/BASE_URL";

export function deletAllCarts() {
	const allCarts = JSON.parse(localStorage.getItem("allCarts"));

	allCarts.forEach(async (item) => {
		const token = localStorage.getItem("token");
		const res = await fetch(`${BASE_URL}/cart/${Number(item)}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
		});
	});
	localStorage.removeItem("allCarts");
}
