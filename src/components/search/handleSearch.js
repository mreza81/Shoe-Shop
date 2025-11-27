import { debounce } from "lodash";

export const handleSearch = debounce((e) => {
	const input = document.getElementById("input-searchPage");
	const recent = JSON.parse(localStorage.getItem("recent-search")) || [];
	if (input.value) {
		recent.push(input.value);
		localStorage.setItem("recent-search", JSON.stringify(recent));
	}
}, 3000);
