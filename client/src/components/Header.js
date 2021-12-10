import React from "react";

export default function Header() {
  return (
    <header
      className="bg-green-100 md:max-w-screen-xl mx-auto
  py-8 px-8"
    >
      <nav className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">InternshipFinder</h1>
        <ul className="flex gap-x-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">MyList</a>
          </li>
          <li>
            <a href="">Myresume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
