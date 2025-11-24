import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function productDetailEl(data) {
	return El({
		element: "div",
		className: "product-div",
		children: [
			El({
				element: "img",
				src: "public/assets/images/back.png",
				className: "absolute left-6 top-6 z-99 cursor-pointer",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/");
						},
					},
				],
			}),
			El({
				element: "img",
				src: data.imageURL,
				className: " w-full",
			}),
			El({
				element: "div",
				className:
					"categoryDiv gap px-6 mt-7 flex items-center justify-between",
				children: [
					El({
						element: "div",
						innerText: `${data.category}  Sportwear`,
						className:
							" text-[27px] text-[#152536] font-inter font-[propis] min-w-[340px]",
					}),
					El({
						element: "img",
						src: "public/assets/images/heart-svgrepo-com.svg",
						className: "w-6 h-6",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex justify-start items-center gap-3 px-6 pt-3",
				children: [
					El({
						element: "div",
						innerText: "5,371 sold",
						className:
							"font-medium text-[12px] bg-[#F3F3F3] flex justify-center items-center py-1 px-2 rounded-[7px] text-center",
					}),
					El({
						element: "img",
						className: "w-5.5",
						src: "public/assets/images/star-half-svgrepo-com.svg",
					}),
					El({
						element: "p",
						innerText: "4.3 (5.389 Reviews)",
						className: "text-[#4b4b4b]",
					}),
				],
			}),
			El({
				element: "hr",
				className: "mx-6 mt-4 text-[#e6e6e6] ",
			}),
			El({
				element: "div",
				innerText: "Description",
				className: "font-[propis] mx-6 mt-5 text-[#323131]",
			}),
			El({
				element: "div",
				innerText:
					"Lorem ipsum dolorconsectetur adipisicing elit.etf Excepturi a ut test agh adipisicing elit juve hyipe hgfr lorem",
				className: " mx-6 mt-[7px] text-[14px] text-[#636262] lending-[1px]",
			}),
		],
	});
}
