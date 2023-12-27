import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">
        <Image src="/assets/logo.png" width={90} height={90} />
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Navbar;
