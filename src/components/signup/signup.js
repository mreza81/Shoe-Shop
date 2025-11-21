import { signup } from "../../API/signup";
import { El } from "../../utils/el";
export function Signup() {
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
				innerText: "Signup to Your Account",
			}),
			El({
				element: "form",
				className: "w-full flex-col justify-center items-center  mt-[48px]",
				children: [
					El({
						element: "input",
						placeholder: "Username",
						type: "text",
						id: "userName-Signup",
						required: true,
						className:
							"w-[380px] mx-6 px-8 py-2 bg-[#FAFAFA] border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black rounded-1",
						eventListener: [
							{
								event: "focus",
								callback: (e) => {
									const img = document.getElementById("envelop-signup");

									img.classList.add("opacity-100");
								},
							},
							{
								event: "blur",
								callback: () => {
									const img = document.getElementById("envelop-signup");
									img.classList.remove("opacity-100");
									img.classList.add("opacity-50");
								},
							},
						],
					}),
					El({
						element: "input",
						placeholder: "Password",
						className:
							"w-[380px] mx-6 px-8 py-2 mt-[21px] bg-[#FAFAFA] border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black rounded-1",
						type: "password",
						id: "password-signup",
						required: true,
						eventListener: [
							{
								event: "focus",
								callback: (e) => {
									const img = document.getElementById("eye-signup");
									const img2 = document.getElementById("lock-signup");
									img.classList.add("opacity-100");

									img2.classList.add("opacity-100");
								},
							},
							{
								event: "blur",
								callback: () => {
									const img = document.getElementById("eye-signup");
									const img2 = document.getElementById("lock-signup");
									img.classList.remove("opacity-100");
									img.classList.add("opacity-50");
									img2.classList.remove("opacity-100");
									img2.classList.add("opacity-50");
								},
							},
						],
					}),
					El({
						element: "button",
						type: "button",
						innerText: "Login",
						id: "login-span",
						className:
							"text-black bg-white text-center w-[47px] mt-[30px] mx-[190px] font-medium text-3.5 cursor-pointer",
					}),

					El({
						element: "button",
						type: "button",
						className:
							"w-[380px] h-[47px] bg-black text-white text-center rounded-[30px] mx-6 mt-[230px] opacity-50 pointer-events-none cursor-pointer",
						innerText: "Signup",
						id: "signup-btn",
						eventListener: [
							{
								event: "click",
								callback: signup,
							},
						],
					}),
					El({
						element: "img",
						src: "public/assets/images/envelope-fill.png",
						id: "envelop-signup",
						className:
							"input-img w-3.5 h-3.5 absolute left-[37px] top-[478px] opacity-50",
					}),
					El({
						element: "img",
						src: "public/assets/images/lock-fill.png",
						id: "lock-signup",
						className:
							"input-img w-3.5 h-3.5 absolute left-[37px] top-[543px] opacity-50",
					}),
					El({
						element: "img",
						src: "public/assets/images/eye-slash-fill.png",
						id: "eye-signup",
						className:
							"input-img w-3.5 h-3.5 absolute left-[375px] top-[543px] opacity-50 cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									let passwordInput =
										document.getElementById("password-signup");
									if (passwordInput.type == "password") {
										passwordInput.type = "text";
									} else if (passwordInput.type == "text") {
										passwordInput.type = "password";
									}
								},
							},
						],
					}),
				],
			}),
		],
	});
}
