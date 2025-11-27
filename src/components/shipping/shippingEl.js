import { chooseShipping } from "./chooseShipping";

export function ShippingEl(param) {
	const type = sessionStorage.getItem("type");

	if (type == ":choose") {
		return chooseShipping();
	} else if (type == ":Address") {
	}
}
