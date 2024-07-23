import React from "react";

// Components
import Newsletter from "../Components/Newsletter/Newsletter.tsx";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb.tsx";

import Recommendations from "../Components/Recommendations/Recommendations.tsx";

const DetailPage: React.FC = () => {
  return (
    <div>
      <Breadcrumb title="Product" />
      <Recommendations />
      <Newsletter />
    </div>
  );
};

export default DetailPage;
