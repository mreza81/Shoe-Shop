import { El } from "../../utils/el";
import { router } from "../../utils/router";
import {
	addAdress,
	addressRender,
	closeModal,
	openModal,
	validateAddressForm,
} from "./shippingFuncs";

export function addressShipping() {
	return El({
		element: "div",
		className: "px-6",
		children: [
			El({
				element: "div",
				className: "flex justify-start items-center gap-6  mt-8",
				children: [
					El({
						element: "img",
						className: "",
						src: "/public/assets/images/back.png",
						className: "w-5 h-5 cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/checkout");
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Shipping Address",
						className: "font-semibold text-[25px]",
					}),
				],
			}),
			El({
				element: "div",
				id: "addressDiv",
				children: [
					setTimeout(() => {
						addressRender();
					}),
				],
			}),
			El({
				element: "button",
				innerText: "Add New Address",
				className: "w-full bg-gray-300 mt-8 py-4 rounded-full font-semibold",
				eventListener: [
					{
						event: "click",
						callback: openModal,
					},
				],
			}),
			El({
				element: "div",
				id: "address-ovelay",
				className:
					"fixed w-full h-screen hidden  bg-gray-700 top-0 left-0 right-0 z-2 opacity-0 transition-opacity duration-300 ",
				eventListener: [
					{
						event: "click",
						callback: closeModal,
					},
				],
			}),
			El({
				element: "div",
				id: "address-modal",
				className:
					"fixed h-[500px] w-[360px] hidden bg-white z-3 top-[213px] left-[32px] rounded-4xl flex flex-col justify-center items-center gap-4 px-10",
				children: [
					El({
						element: "img",
						src: "/public/assets/images/location-svgrepo-com.svg",
						classList: "h-15 w-15",
					}),
					El({
						element: "div",
						innerText: "Add New Address",
						className: "text-[25px] font-semibold",
					}),

					El({
						element: "input",
						placeholder: "title",
						id: "address-title",
						className:
							"w-full flex justify-center items-center px-4 text-black bg-gray-200 placeholder:text-gray-400 h-[40px] rounded-lg text-[15px] font-bold",
						eventListener: [{ event: "input", callback: validateAddressForm }],
					}),
					El({
						element: "textarea",
						placeholder: "detail",
						id: "address-detail",
						className:
							"w-full flex justify-center items-center  bg-gray-200  text-black h-[150px] text-[15px]  py-4 px-4 rounded-lg placeholder:text-gray-400",
						eventListener: [{ event: "input", callback: validateAddressForm }],
					}),
					El({
						element: "button",
						innerText: "Add",
						id: "add-adress-Btn",
						className:
							"w-full flex justify-center items-center  bg-gray-200  text-black h-[60px] rounded-full text-[15px] font-bold opacity-50 disabled:true cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									addAdress(), addressRender();
								},
							},
						],
					}),
				],
			}),
		],
	});
}
