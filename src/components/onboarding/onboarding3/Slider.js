import { El } from "../../../utils/el";
import { Swiper1 } from "./swiper1";
import { Swiper2 } from "./swiper2";
import { Swiper3 } from "./swiper3";
// import "swiper/css";

export function Slider() {
	return El({
		element: "div",
		className: "swiper mySwiper",
		children: [
			El({
				element: "div",
				className: "swiper-wrapper",
				children: [
					El({
						element: "div",
						className: "swiper-slide",
						children: [Swiper1()],
					}),
					El({
						element: "div",
						className: "swiper-slide",
						children: [Swiper2()],
					}),
					El({
						element: "div",
						className: "swiper-slide ",
						children: [Swiper3()],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal",
			}),
			El({
				element: "div",
				className: "swiper-button-next",
			}),
			El({
				element: "div",
				className: "swiper-button-prev",
			}),
		],
	});
}
