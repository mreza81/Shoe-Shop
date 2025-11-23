import { getItems } from "../../API/getItems";
import { HomeEl } from "./HomeEl";

export function home() {
	const home = HomeEl();
	setTimeout(() => {
		getItems();
	}, 0);
	return home;
}
