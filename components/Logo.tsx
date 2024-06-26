import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl text-black dark:text-white bg-gradient-to-r text-transparent bg-clip-text hover:cursor-pointer"
    >
      Form
    </Link>
  );
}

export default Logo;
