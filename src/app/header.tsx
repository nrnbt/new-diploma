// Header.js
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-screen bg-gray-900  text-white py-4">
      <div className=" container m-auto flex justify-between items-center font-medium  ">
        <div className="container mx-auto">
          <img src="/nmit_logo.png" alt="" />
        </div>
        <div className="flex items-center gap-10 text-xl">
          <Link href="/">Хайх</Link>
          <Link href="/diploma">Диплом</Link>
          {localStorage?.getItem("role") && (
            <Link href="/process">Явц</Link>
          )}{" "}
          <Link href="/login">Нэвтрэх</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
