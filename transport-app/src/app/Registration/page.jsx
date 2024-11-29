"use client"

import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const Registration = () => {

    const [name, setName] = useState('');
    const [photourl, setPhotourl] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name, !photourl, !email, !password) {
            setError("All the fields are required")
        }

        try {


            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              });
        
              const { user } = await resUserExists.json();
        
              if (user) {
                setError("User already exists.");
                return;
              }




            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    photourl,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed.");
            }
        }
        catch (error) {
            console.log("Error during registration: ", error);
        }

    }


    return (
        <div className="">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-[#ede9ff] border-2 border-green-400 px-5 md:px-10 py-10">
                        <form className="card-body text-black font-semibold" onSubmit={handleSubmit} >
                            <h1 className="text-3xl font-semibold text-center mb-5">Registration</h1>
                            <div className="form-control">
                                <input type="text" onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" className="text-slate-700 border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-700 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">

                                <input type="text" onChange={(e) => setPhotourl(e.target.value)} name="photourl" placeholder="Photourl" className="text-slate-700 border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-700 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">

                                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" className="text-slate-700 border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-700 bg-[#ede9ff]" required />
                            </div>

                            <div className="form-control">

                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" className="text-slate-700 border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-700 bg-[#ede9ff]" required />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-green-700 hover:bg-green-900 hover:text-white text-white font-bold">Registration</button>
                            </div>


                            {
                                error ?
                                    < div className='bg-red-700 text-white py-2 px-2 rounded-md w-[200px] '>
                                        {error}
                                    </div>
                                    : ''
                            }





                        </form>
                        <p className="text-center text-black font-bold">Already Have an account? Please <Link href="/Login"><button className="bg-white-700 hover:bg-green-300 text-black border-2 border-slate-600  py-2 px-3 rounded-lg">Login</button></Link></p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Registration;