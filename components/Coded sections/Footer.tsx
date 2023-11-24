import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between px-5 py-8 mx-auto sm:flex-row">
        <div className="flex items-center gap-x-4">
          <Image
            src={Logo}
            alt="logo of Somica Studios"
            height={48}
            width={48}
          />
          <p>© 20xx Somica Studios</p>
        </div>
        <div>
          <Link href="shop" className="mr-5 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
