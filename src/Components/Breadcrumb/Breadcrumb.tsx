import React from "react";

// Icons
import ChevronRight from "../../Icons/ChevronRight.tsx";

// Link
import { Link } from "react-router-dom";

// Interface
interface BreadcrumbPropsType {
  title: string;
  mainTitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbPropsType> = ({ title }) => {
  return (
    <div className="bg-[#F6F6F6] py-5">
      <div className="container mx-auto flex gap items-center">
        <Link to="/">
          <p className="font-medium text-sm text-[#5C5F6A]">E-commerce</p>
        </Link>
        <span>
          <ChevronRight />
        </span>
        <p className="font-medium text-sm text-[#0E1422]">{title}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
