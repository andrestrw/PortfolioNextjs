"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function NavBarAuth() {
  const { data: session, status } = useSession();
  // console.log(session);

  return (
    <nav className="flex flex-col  items-center  sm:flex-row  sm:flex sm:justify-between sm:items-center   bg-bgGeneral   px-0 py-0  text-white sm:px-24 sm:py-3">
      <h1 className="text-xl font-bold">NextAuth</h1>

      <ul className="flex gap-x-2">
        {status === "loading" ? (
          <li>Loading...</li>
        ) : !session ? (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBarAuth;
