import "../styles/globals.css";
// import SessionProviderWrapper from "../components/sessionProvider/SessionProviderWrapper";
import { AuthProvider } from "../components/sessionProvider/authProvider";

export const metadata = {
  title: "Andrés Chicaiza | Desarrollador full stack ",
  description:
    "Portafolio de Andrés Chicaiza, desarrollador web especializado en React, Next.js, y Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
