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
						required: true,

						type: "email",
						id: "user-login",
						className:
							"w-[380px] mx-6 px-8 py-2 bg-[#FAFAFA] border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black",
						eventListener: [
							{
								event: "focus",
								callback: (e) => {
									const img = document.getElementById("envelop-login");
									console.log(img);
									img.classList.add("opacity-100");
								},
							},
							{
								event: "blur",
								callback: () => {
									const img = document.getElementById("envelop-login");
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
							"w-[380px] mx-6 px-8 py-2 mt-[21px] bg-[#FAFAFA] border border-[2px] border-[#FAFAFA] focus:outline-none focus:border-black",
						type: "password",
						id: "password-login",
						required: true,
						eventListener: [
							{
								event: "focus",
								callback: (e) => {
									const img = document.getElementById("eye-login");
									const img2 = document.getElementById("lock-login");
									img.classList.add("opacity-100");

									img2.classList.add("opacity-100");
								},
							},
							{
								event: "blur",
								callback: () => {
									const img = document.getElementById("eye-login");
									const img2 = document.getElementById("lock-login");
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
						innerText: "Signup",
						id: "signup-span",
						className:
							"text-black bg-white text-center w-[47px] mt-[30px] mx-[190px] font-medium text-3.5 cursor-pointer",
					}),
					El({
						element: "button",
						id: "signin-btn",
						className:
							"w-[380px] h-[47px] bg-black text-white text-center rounded-[30px] mx-6 mt-[230px] opacity-50 cursor-pointer",
						innerText: "Signin",
					}),
					El({
						element: "img",
						src: "public/assets/images/envelope-fill.png",
						id: "envelop-login",
						className:
							"w-3.5 h-3.5 absolute left-[37px] top-[478px] opacity-50",
					}),
					El({
						element: "img",
						src: "public/assets/images/lock-fill.png",
						id: "lock-login",
						className:
							"w-3.5 h-3.5 absolute left-[37px] top-[543px] opacity-50",
					}),
					El({
						element: "img",
						src: "public/assets/images/eye-slash-fill.png",
						id: "eye-login",
						className:
							"w-3.5 h-3.5 absolute left-[375px] top-[543px] opacity-50 cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									let passwordInput = document.getElementById("password-login");
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
