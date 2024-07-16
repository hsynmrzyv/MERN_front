import React from "react";

// Link
import { Link } from "react-router-dom";

const NotificationBar: React.FC = () => {
  return (
    <div className="bg-[#0E1422] py-4 text-white text-sm flex items-center justify-center gap-2">
      <p>Get 25% OFF on your first order.</p>
      <Link to="/products" className="font-medium underline">
        Order now
      </Link>
    </div>
  );
};

export default NotificationBar;
