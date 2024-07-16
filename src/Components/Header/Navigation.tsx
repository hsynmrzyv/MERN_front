import React from "react";

// Icons
import ChevronDown from "../../Icons/ChevronDown.tsx";

// Link
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex text-[#5C5F6A] gap-8 text-sm font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories" className="flex gap-2 items-center">
            <span>Categories</span>
            <ChevronDown />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
