"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavBarAuth from "../../../components/common/navBarAuth";
import Container from "../../../components/container";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    // console.log(res);

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });

  return (
    <>
      <Container className=" min-h-screen  md:h-full">
        <NavBarAuth />
        <div className=" bg-bgGeneral flex flex-col-reverse md:flex-row md:flex gap-6  min-h-[80vh] md:h-5/6 ">
          <div className="  text-white flex justify-center flex-col  text-center md:text-left items-center ">
            <div className="w-5/6 ">
              <h2 className="text-white text-2xl font-bold mb-4 text-center md:text-left  ">
                ¡Bienvenido!
              </h2>
              <p className="text-white text-xl font-medium mb-4">
                Si no tienes una cuenta, te invitamos a registrarte haciendo
                clic en {""}
                <Link
                  href="/auth/register"
                  className="register-link border-b  border-white "
                >
                  Registrarse
                </Link>
                <br />
              </p>
              {/* <p className="text-white text-xl font-medium mb-4">
                Este proyecto demuestra una implementación sencilla de
                autenticación usando NextAuth.
              </p> */}
            </div>
          </div>

          <div className="bg-bgGeneral  h-80vh md:h-screen flex justify-center items-center w-12/12 md:w-8/12  grow ">
            <form onSubmit={onSubmit} className="w-60">
              {error && <p className="bg-red-500 text-xs w-80">{error} </p>}

              <h1 className="text-white font-bold text-4xl mb-4 min-w-72 ">
                Login
              </h1>
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

              <label
                htmlFor="password"
                className="text-white mb-2 block text-sm"
              >
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
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
