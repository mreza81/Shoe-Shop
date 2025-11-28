export function selectItems(e) {
	const select = document.querySelectorAll(".select");
	console.log(select);
	select.forEach((item) => {
		item.classList.add("hidden");
	});
	console.log(e.target);

	e.target.classList.remove("hidden");
}
