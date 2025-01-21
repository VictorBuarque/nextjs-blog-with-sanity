import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Buarque Blog",
  description: "This is a blog about web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className} min-w-screen min-h-screen bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
