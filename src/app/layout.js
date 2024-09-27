import "./../styles/globals.css";
// import SessionProviderWrapper from "../components/sessionProvider/SessionProviderWrapper";
import { AuthProvider } from "../components/sessionProvider/authProvider";
import { Roboto, Rubik } from "next/font/google";

import { Metadata } from "next";

export const metadata = {
  title: "Andrés Chicaiza | Desarrollador full stack ",
  description:
    "Portafolio de Andrés Chicaiza, desarrollador web especializado en React, Next.js, y Node.js.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

// either Static metadata

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
