import { Onboarding1 } from "./onboarding1.js";
import { Onboarding2 } from "./onboarding2.js";

export function Onboarding() {
	return Onboarding1();
}




// داداشم چت چی پی تی
// import { El } from "../../utils/el.js";
// import { Onboarding1 } from "./onboarding1.js";
// import { Onboarding2 } from "./onboarding2.js";

// export function Onboarding() {
// 	const container = El({
// 		element: "div",
// 	});

// 	// اول: نمایش Onboarding1
// 	const first = Onboarding1();
// 	container.appendChild(first);

// 	// بعد از 5 ثانیه: نمایش Onboarding2
// 	setTimeout(() => {
// 		container.innerHTML = ""; // پاک کردن صفحه اول
// 		container.appendChild(Onboarding2()); // نمایش صفحه دوم
// 	}, 5000);

// 	return container;
// }