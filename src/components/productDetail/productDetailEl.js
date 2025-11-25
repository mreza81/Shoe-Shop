import { addToCard } from "../../API/productDetail/addToCart";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";

export function productDetailEl(data) {
	if (store.getState(`counter${data.id}`) === undefined) {
		store.setState(`counter${data.id}`, 1);
	}
	store.setState(`totalPrice${data.id}`, data.price);

	const handleIncrement = () => {
		let currentValue = store.getState(`counter${data.id}`) || 1;
		store.setState(`counter${data.id}`, currentValue + 1);
		calculatePrice();
	};
	const handleDecrement = () => {
		const currentValue = store.getState(`counter${data.id}`) || 1;
		if (currentValue > 1) {
			store.setState(`counter${data.id}`, currentValue - 1);
			calculatePrice();
		}
	};
	const calculatePrice = () => {
		let count = store.getState(`counter${data.id}`);

		let totalPrice = count * data.price;

		store.setState(`totalPrice${data.id}`, totalPrice);

		let priceDiv = document.getElementById(`total-box-${data.id}`);
		priceDiv.innerText = `$ ${totalPrice}.00`;
	};

	const productDetail = El({
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
							store.setState(`counter${data.id}`, 1);
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
							" text-[27px] text-[#152536] font-inter-bold min-w-[340px]",
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
				className: "font-[propis] mx-6 mt-5 text-[#161616]",
			}),
			El({
				element: "div",
				innerText:
					"Lorem ipsum dolorconsectetur adipisicing elit.etf Excepturi a ut test agh adipisicing elit juve hyipe hgfr lorem",
				className: " mx-6 mt-[7px] text-[14px] text-[#636262] lending-[1px]",
			}),
			El({
				element: "div",
				className: "w-full flex justify-between items-end",
				children: [
					El({
						element: "div",
						className:
							"sizeDiv ml-6 mt-3 w-[140px] text-[#161616] font-[propis] font-bold text-[18px] ",
						innerText: "Size",
						children: [
							El({
								element: "div",
								className:
									"sizes w-[160px] flex justify-around items-center -ml-[5px]",
							}),
						],
					}),

					El({
						element: "div",
						className:
							"colorDiv mt-3 text-[#161616] font-[propis] font-bold text-[18px] ml-[50px] absolute bottom-[242px] left-[163px]  ",
						innerText: "Color",
					}),
					El({
						element: "div",
						className:
							"colors w-[250px] flex justify-start items-center gap-3 ml-[40px]  overflow-x-scroll no-scrollbar",
					}),
				],
			}),
			El({
				element: "div",
				className:
					"max-w-full h-13 mx-6 mt-5 flex justify-start items-center gap-7",
				children: [
					El({
						element: "div",
						className: "font-propis font-semibold text-[17px]",
						innerText: "Quantity",
					}),
					El({
						element: "div",
						className:
							" w-[130px] h-[45px]  bg-[#F4F4F4] px-5 rounded-full flex justify-around items-center font-bold text-[20px] ",

						children: [
							El({
								element: "img",
								src: "public/assets/images/heavyminussign-svgrepo-com(1).svg",
								className: "  w-[14px]  cursor-pointer",
								id: "minuss-btn",
								eventListener: [
									{
										event: "click",
										callback: handleDecrement,
									},
								],
							}),
							El({
								element: "span",
								innerText: store.getState(`counter${data.id}`),
								className: "quantity-box w-5 flex justify-center items-center",
							}),
							El({
								element: "img",
								src: "public/assets/images/heavyplussign-svgrepo-com(1).svg",
								className: "  w-[14px] h-5 cursor-pointer",
								id: "plus-btn",
								eventListener: [
									{
										event: "click",
										callback: handleIncrement,
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "hr",
				className: "mt-5 text-[#e6e6e6] mx-6",
			}),
			El({
				element: "div",
				className: "mx-6 mt-4 flex justify-between items-center",
				children: [
					El({
						element: "div",
						className: "flex flex-col justify-start ",
						children: [
							El({
								element: "div",
								innerText: "Total Price",

								className: " text-[#5f5d5d] text-[14px] font-semibold",
							}),
							El({
								element: "div",
								innerText: `$ ${data.price}.00`,
								id: `total-box-${data.id}`,
								className:
									"total-price-box text-[#101010] text-[25px] font-semibold font-propis",
							}),
						],
					}),
					El({
						element: "button",
						eventListener: [
							{
								event: "click",
								callback: addToCard,
							},
						],
						className:
							"w-[260px] bg-black text-white h-[60px] rounded-full flex justify-center items-center gap-2 cursor-pointer shadow-2xl",
						children: [
							El({
								element: "img",
								src: "public/assets/images/bag-4-svgrepo-com.svg",
								className: "w-5 h-5",
							}),
							El({
								element: "p",
								innerText: "Add to Cart",
								className: "text-white font-propis font-semibold ",
							}),
						],
					}),
				],
			}),
		],
	});
	store.subscribe(`counter${data.id}`, (value) => {
		const counterDisplay = document.querySelector(".quantity-box");
		if (counterDisplay) {
			counterDisplay.innerText = value !== undefined ? value : 0;
		}
	});
	return productDetail;
}
