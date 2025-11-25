import { showCart } from "../../API/cart/cart";
import { cardEl } from "./cartEL";

export function cart() {
	const cart = cardEl();
	setTimeout(() => {
		showCart();
	}, 0);
	return cart;
}
