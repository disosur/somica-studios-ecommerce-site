import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Coded sections/Navbar";
import Footer from "@/components/Coded sections/Footer";
import SessionProvider from "@/app/SessionProvider";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Somica Studios",
  description:
    "Immerse yourself to a custom created and cute 3D printed creations that would elebate your life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider>
          <div className=" bg-background">
            <Navbar />
            <div className="shadow-2xl ">{children}</div>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
