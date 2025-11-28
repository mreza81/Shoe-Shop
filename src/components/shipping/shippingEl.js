import { chooseShipping } from "./chooseShipping";
import { paymentShipping } from "./paymentShipping";

export function ShippingEl(param) {
	const type = sessionStorage.getItem("type");

	if (type == ":choose") {
		return chooseShipping();
	} else if (type == ":payment") {
		return paymentShipping();
	}
}
