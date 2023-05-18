import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} font-ubuntu min-h-screen lg:flex lg:items-center lg:justify-center lg:bg-background-color  relative`}
      >
        {children}
      </body>
    </html>
  );
}
