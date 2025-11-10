"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const route = useRouter()
    const [isShow, setISwho] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        return route.push('/dashboard')
    }

    return (
        <main className="flex h-sreen w-full">
            {/* Lado da imagem */}
            <div className="w-1/2 h-full hidden md:flex items-center justify-center bg-gray-100">
                <Image
                    src="/assets/imgLogin.jpg"
                    alt="Tela de login"
                    width={5333}
                    height={7999}
                    className="w-full h-full object-cover "
                    priority
                />
            </div>

            <div className="h-screen grid place-items-center w-full ">
                <div className="flex items-center space-x-2 w-full mt-[-20px] justify-end pr-4 ">
                    <p>Do not have an account?</p>
                    <p className="font-semibold cursor-pointer text-[#6f0480]">Sign Up</p>
                </div>
                <form className="text-zinc-700 w-[35%]" onSubmit={onSubmit}>
                    <h1 className="text-xl font-semibold text-zinc-700 pb-4">Sign in</h1>
                    <div className="space-y-5 flex flex-col">
                        <input type="email" placeholder="Email address"
                            required
                            value={formData?.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="p-2 rounded-lg ring-1 ring-zinc-300 focus:outline-none text-sm"
                        />
                        <div className="relative ring-1 ring-zinc-300 rounded-lg">
                            <input type={`${isShow ? "text" : "password"}`} placeholder="Password"
                                required
                                value={formData?.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="p-2 rounded-lg w-full pr-12 ring-1 ring-zinc-300 focus:outline-none text-sm "
                            />
                            {!isShow ? <svg onClick={() => setISwho(!isShow)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="absolute right-2 top-2 cursor-pointer lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                <circle cx="12" cy="12" r="3" /></svg> :

                                <svg onClick={() => setISwho(!isShow)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="absolute right-2 top-2 cursor-pointer lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>}
                        </div>
                    </div>
                    <p className="text-[12px] mt-2 text-sky-700 cursor-pointer">Fogot your password?</p>

                    <button type="submit" className="p-2 rounded-lg bg-[#6f0480] text-white w-full text-center mt-10 duration-300 cursor-pointer">Sign in</button>

                    <div className="flex items-center space-x-2 w-full mt-4">
                        <div className="ring-1 ring-zinc-200 w-[50%] rounded-lg"></div>
                        <p className="text-zinc-700">or</p>
                        <div className="ring-1 ring-zinc-200 w-[50%] rounded-lg"></div>
                    </div>
                    <div className="flex space-x-6 justify-between items-center">
                        <button type="button" className="flex space-x-2 items-center mt-4 rounded-lg ring-1 ring-zinc-200 p-2 w-full justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <p className="text-sm text-zinc-700">Google</p>
                        </button>
                        <button type="button" className="flex space-x-2 rounded-lg mt-4 items-center ring-1 ring-zinc-200 p-2 w-full justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                            <p className="text-sm text-zinc-700">Facebook</p>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
