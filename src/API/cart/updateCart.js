import { BASE_URL } from "../BASE_URL/BASE_URL";

export async function decreaseCartQuantity(item) {
	const cartId = sessionStorage.getItem("cart-id");
	const token = localStorage.getItem("token");

	if (item.quantity > 1) {
		item.quantity -= 1;

		const res = await fetch(`${BASE_URL}/cart/${cartId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				quantity: item.quantity,
			}),
		});
		const data = await res.json();
		const updatedSpan = document.getElementById(`quantityCart-${item.id}`);
		const updatedprice = document.getElementById(`tPrice-${item.id}`);
		updatedSpan.innerText = item.quantity;
		updatedprice.innerText = `$${item.quantity * item.sneaker.price}.00`;
	}
}

export async function increaseCartQuantity(item) {
	const cartId = sessionStorage.getItem("cart-id");
	const token = localStorage.getItem("token");

	item.quantity += 1;

	const res = await fetch(`${BASE_URL}/cart/${cartId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			quantity: item.quantity,
		}),
	});
	const data = await res.json();

	const updatedSpan = document.getElementById(`quantityCart-${item.id}`);
	const updatedprice = document.getElementById(`tPrice-${item.id}`);
	const totalPrice = document.getElementById("cart-totalPrice");

	updatedSpan.innerText = item.quantity;
	updatedprice.innerText = `$${item.quantity * item.sneaker.price}.00`;
}
