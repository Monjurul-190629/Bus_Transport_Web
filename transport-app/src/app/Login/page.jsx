"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          console.log(res)
    
          if (res.error) {
            setError("Invalid Credentials");
            return;
          }
    
          router.push('/')
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <div>
            <div className="hero py-10 px-4 sm:px-6 md:px-10 ">
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center ">
                    <div className="card mt-5 lg:mt-0 shrink-0 w-full max-w-xs md:max-w-sm bg-slate-200 shadow-2xl border-2 border-green-500  px-5 md:px-10 py-5">
                        <form onSubmit={handleSubmit}
                            className="card-body text-slate-900 font-normal flex flex-col justify-center items-center"

                        >
                            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">Login now</h1>

                            <div className="form-control w-full">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    className="text-black border-b-2 border-slate-500 outline-none py-2 w-full placeholder-slate-500 text-normal bg-[#ede9ff] text-justify"
                                    required
                                />
                            </div>

                            <div className="form-control w-full mt-4">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="text-black border-b-2 border-slate-500 outline-none py-2 w-full placeholder-slate-500 text-normal bg-[#ede9ff] text-justify"
                                    required
                                />
                            </div>

                            <div className="form-control mt-6 w-full">
                                <button className="btn hover:bg-green-800 bg-green-600 hover:text-slate-200 text-white w-full">
                                    Login
                                </button>
                            </div>

                            {
                                error ?
                                    < div className='bg-red-700 text-white py-2 px-2 rounded-md w-[200px] '>
                                        {error}
                                    </div>
                                    : ''
                            }

                        </form>

                        <div className="flex gap-3 justify-center mt-4">
                            <button type = "submit"
                                className="text-xl py-2 px-3 border-2 text-green-800 border-green-500 rounded-lg bg-transparent"

                            >
                                <FaGoogle />
                            </button>
                        </div>

                        <p className="text-center text-slate-900 mt-4 font-bold">
                            New here? Please{" "}
                            <Link href="/Registration">
                                <span className="text-green-800 underline">Register</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;