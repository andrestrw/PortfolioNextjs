"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import NavBarAuth from "../../../components/common/navBarAuth";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
    }
  });

  return (
    <>
      {/* //<NavBarAuth></NavBarAuth> */}
      <div className="bg-black h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-1/4">
          {error && <p className="bg-red-500 text-xs">{error} </p>}

          <h1 className="text-white font-bold text-4xl mb-4 ">Login</h1>
          <label htmlFor="email" className="text-white mb-2 block text-sm">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="p-3 rounded block mb-2 bg-slate-900 text-white w-full"
            placeholder="user@email.com"
          />

          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <label htmlFor="password" className="text-white mb-2 block text-sm">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Passwordy is required",
              },
            })}
            className="p-3 rounded block mb-2 bg-slate-900 text-white w-full"
            placeholder="***********"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2 ">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
