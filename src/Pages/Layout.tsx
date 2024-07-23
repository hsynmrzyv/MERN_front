import React, { useState, useEffect } from "react";
import ProfileMenu from "../Components/Profile/ProfileMenu.tsx";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    const titles: { [key: string]: string } = {
      orders: "Orders",
      password: "Change Password",
      address: "Shipping Address",
      wishlist: "Wishlist",
      "account-detail": "Account Details",
    };
    setTitle(titles[path || ""] || "My Account");
  }, [location]);

  return (
    <div className="pl-44 pt-[60px] flex">
      <aside className="pr-9 pt-[60px] pb-[100px] border-r border-[#E9E9EB]">
        <ProfileMenu />
      </aside>
      <main className="ml-12">
        <div className="text-[#0E1422] text-[16px] pb-10 font-semibold leading-5 capitalize">
          {title}
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
