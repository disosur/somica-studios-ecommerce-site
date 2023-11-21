import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import CartView from "../shared/CartView";
import Login from "../shared/Login";

export default function Navbar() {
  return (
    <header className="fixed z-50 w-screen text-gray-600 bg-white shadow body-font">
      <div className="container flex flex-row items-center justify-center gap-10 p-5 mx-auto md:flex-row">
        <Link href="/" className="font-medium text-gray-900 title-font md:mb-0">
          <span className="ml-3 text-xl">Somica</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link href="shop" className="mr-5 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
        <div className="flex gap-2">
          <CartView />
          <Login />
        </div>
      </div>
    </header>
  );
}
