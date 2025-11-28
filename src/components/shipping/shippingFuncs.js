export function selectItems(e) {
	const select = document.querySelectorAll(".select");

	select.forEach((item) => {
		item.classList.add("hidden");
	});

	e.target.firstChild.classList.remove("hidden");
}
