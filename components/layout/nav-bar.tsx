"use client";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className=" z-50 top-0 bg-slate-50 w-full p-4 shadow-sm flex items-center border-b h-14">
      <div className="w-full flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/favourite">Favourite</Link>
      </div>
    </nav>
  );
};
