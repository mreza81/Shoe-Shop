import { El } from "../../utils/el";
export function Login() {
	return El({
		element: "div",
		className: "",
		children: [
			El({
				element: "img",
				src: "public/assets/images/back.png",
				className: "w-4 h-3.5 mt-[21px] ml-8",
			}),
			El({
				element: "div",
				className: "mt-[132px] flex justify-center items-center",
				children: [
					El({
						element: "img",
						src: "public/assets/images/logo.png",
						className: "w-[54px] h-[81px]",
					}),
				],
			}),
			El({
				element: "div",
				className: "text-center mt-[118px] text-[32px] font-semibold ",
				innerText: "Login to Your Account",
			}),
			El({
				element: "form",
				className: "w-full flex-col justify-center items-center  mt-[48px]",
				children: [
					El({
						element: "input",
						placeholder: "Username",
						className:
							"w-[380px] mx-6 px-8 py-2 bg-[#FAFAFA] border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black",
						children: [],
					}),
					El({
						element: "input",
						placeholder: "Password",
						className:
							"w-[380px] mx-6 px-8 py-2 mt-[21px] bg-[#FAFAFA] border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black",
						type: "password",
					}),
					El({
						element: "button",
						innerText: "Signup",
						className:
							"text-black bg-white text-center w-full mt-[30px] font-medium text-3.5",
					}),
					El({
						element: "button",
						className:
							"w-[380px] h-[47px] bg-black text-white text-center rounded-[30px] mx-6 mt-[230px] opacity-50",
						innerText: "Signin",
					}),
					El({
						element: "img",
						src: "public/assets/images/envelope-fill.png",
						className:
							"w-3.5 h-3.5 absolute left-[37px] top-[478px] opacity-50",
					}),
					El({
						element: "img",
						src: "public/assets/images/lock-fill.png",
						className:
							"w-3.5 h-3.5 absolute left-[37px] top-[542px] opacity-50",
					}),
					El({
						element: "img",
						src: "public/assets/images/eye-slash-fill.png",
						className:
							"w-3.5 h-3.5 absolute left-[375px] top-[542px] opacity-50",
					}),
				],
			}),
		],
	});
}
