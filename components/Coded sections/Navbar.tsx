import React from "react";
import Link from "next/link";
import CartView from "../shared/CartView";
import Login from "../shared/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default async function Navbar() {
  const login = await getServerSession(authOptions);

  return (
    <header className="shadow-xl ">
      <div className="container flex flex-row items-center justify-between gap-10 p-5 mx-auto md:flex-row">
        <nav>
          <Link href="shop" className="mr-5 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
        <Link href="/" className="font-medium text-gray-900 title-font md:mb-0">
          <Image
            src={Logo}
            alt="logo of Somica Studios"
            height={48}
            width={48}
          />
        </Link>
        <div className="flex gap-2">
          <CartView />
          <Login session={login} />
        </div>
      </div>
    </header>
  );
}
