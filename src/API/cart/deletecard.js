import { closeModal } from "../../components/cart/handleMdal";
import { BASE_URL } from "../BASE_URL/BASE_URL";
import { showCart } from "./showCart";

export async function deleteCard() {
	const cartId = sessionStorage.getItem("cart-id");

	const token = localStorage.getItem("token");
	const res = await fetch(`${BASE_URL}/cart/${cartId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
}
