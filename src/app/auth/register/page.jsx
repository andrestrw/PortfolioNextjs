"use client";

import NavBarAuth from "../../../components/common/navBarAuth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Container from "../../../components/container";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password == !data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  // console.log(errors);

  return (
    <>
      <Container>
        <NavBarAuth />
        <div className=" h-[calc(100vh-7rem)] flex justify-center items-center">
          <form onSubmit={onSubmit} className=" w-10/12 md:w-1/4">
            <h1 className="text-white font-bold text-4xl mb-4 ">Register</h1>
            <label htmlFor="username" className="text-white mb-2 block text-sm">
              Username
            </label>
            <input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-white w-full"
              placeholder="yourUser123"
            />

            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            <label htmlFor="email" className="text-white mb-2 block text-sm">
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-white w-full "
              placeholder="user@email.com"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label htmlFor="email" className="text-white mb-2 block text-sm">
              Password:
            </label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-white w-full "
              placeholder="************"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <label htmlFor="email" className="text-white mb-2 block text-sm">
              Confirm Password:
            </label>
            <input
              type="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is required",
                },
              })}
              className="p-3 rounded block mb-2 bg-slate-900 text-white w-full "
              placeholder="************"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2 ">
              Register
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
