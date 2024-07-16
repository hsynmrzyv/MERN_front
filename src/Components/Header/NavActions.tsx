import React from "react";

// Icons
import Avatar from "../../Icons/Avatar.tsx";
import Cart from "../../Icons/Cart.tsx";
import Search from "../../Icons/Search.tsx";

// Link
import { Link } from "react-router-dom";

const NavActions: React.FC = () => {
  return (
    <div className="flex items-center gap-8">
      {/* Search Input */}
      <form>
        <div className="relative h-[45px] w-[265px]">
          <input
            type="text"
            className="text-sm font-medium h-full w-full top-0 left-0 rounded-md border border-[#E6E7E8] focus:outline-none py-[10px] pl-[45px] font-inherit"
            placeholder="Search products"
          />
          <Search className="absolute top-[12px] left-[15px]" />
        </div>
      </form>
      {/* Cart Btn */}
      <button>
        <Link to="/cart">
          <Cart />
        </Link>
      </button>
      {/* Profile Btn */}
      <button>
        <Avatar />
      </button>
    </div>
  );
};

export default NavActions;
