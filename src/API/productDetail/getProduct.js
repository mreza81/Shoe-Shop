import { router } from "../../utils/router";
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
		if (!res.ok) {
			if (res.status === 401 || res.status === 403) {
				localStorage.removeItem("token");
				alert("your time is ended! please login again ");
				router.navigate("/login");
				return;
			}
		}
		const data = await res.json();
		console.log(data);

		return data;
	} catch {
		throw new Error(Error);
	}
}
