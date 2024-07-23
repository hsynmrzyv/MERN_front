import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store.ts";
import SizeFilterItem from "./SizeFilterItem.tsx";
import { setSizes, toggleSelectedSizes } from "../../../slices/size.slice.ts";

const SizeFilter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const sizes = useSelector((state: RootState) => state.sizes.sizes);
  const selectedSizes = useSelector(
    (state: RootState) => state.sizes.selectedSizes
  );

  // Function to fetch sizes from the API
  const getSizes = async () => {
    try {
      const response = await fetch("/api/sizes");
      const data = await response.json();
      dispatch(setSizes(data));
    } catch (error) {
      console.error("Failed to fetch sizes", error);
    }
  };

  // Fetch sizes on component mount
  useEffect(() => {
    getSizes();
  }, [dispatch]);

  // Handle toggling sizes
  const handleSizeToggle = (sizeId: string) => {
    dispatch(toggleSelectedSizes(sizeId));
  };

  return (
    <div>
      <h3 className="text-[#0E1422] font-medium text-sm mb-4">Sizes</h3>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <SizeFilterItem
            key={size._id}
            size={size}
            isSelected={selectedSizes.some((s) => s._id === size._id)}
            onClick={() => handleSizeToggle(size._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
