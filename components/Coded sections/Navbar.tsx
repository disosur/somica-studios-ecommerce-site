import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
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
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <Link href="/">
          <Button>Log in</Button>
        </Link>
      </div>
    </header>
  );
}