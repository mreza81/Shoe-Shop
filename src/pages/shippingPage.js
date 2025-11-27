import { ShippingEl } from "../components/shipping/shippingEl";

export function shippingPage(param) {
	sessionStorage.setItem("type", param.type);
	return ShippingEl(param);
}
