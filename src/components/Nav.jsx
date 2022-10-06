import React from "react";
// Import data
import { navData } from "../../data";

function Nav() {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-6">
        {navData.map((link, index) => {
          return (
            <li
              className="border-b-2 border-transparent hover:border-blue transition-all duration-500"
              key={index}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
