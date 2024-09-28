import "../styles/globals.css";
// import SessionProviderWrapper from "../components/sessionProvider/SessionProviderWrapper";
import { AuthProvider } from "../components/sessionProvider/authProvider";
import { Roboto, Rubik } from "next/font/google";

import { Metadata } from "next";

export const metadata = {
  title: "Andrés Chicaiza | Desarrollador full stack ",
  description:
    "Portafolio de Andrés Chicaiza, desarrollador web especializado en React, Next.js, y Node.js.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

// either Static metadata

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-bgGeneral `}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
