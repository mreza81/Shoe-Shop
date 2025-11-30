export function sucsesAddCart() {
	const sucsessDiv = document.getElementById("sucsess-div");

	sucsessDiv.classList.remove("hidden");
}

export function hiddenSucessDiv() {
	const sucsessDiv = document.getElementById("sucsess-div");
	sucsessDiv.classList.add("hidden");
}

export function checkSizeSelected() {
	const selectedSize = document.getElementById("select-size");
	const sizeBtns = document.querySelectorAll(".size-btn");
	let selected = null;
	sizeBtns.forEach((btn) => {
		if (btn.classList.contains("bg-black")) {
			selected = btn;
		}
	});
	if (!selected) {
		selectedSize.classList.remove("hidden");
		return false;
	}
	selectedSize.classList.add("hidden");

	return true;
}

export function checkColorSelected() {
	const selectedColor = document.getElementById("select-color");

	const check = document.querySelector(".colors .check:not(.hidden)");
	if (!check) {
		selectedColor.classList.remove("hidden");
		return false;
	}
	selectedColor.classList.add("hidden");

	return true;
}
