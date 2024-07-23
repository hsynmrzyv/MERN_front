import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store.ts";
import {
  setColors,
  toggleSelectedColors,
} from "../../../slices/colors.slice.ts";
import ColorFilterItem from "./ColorFilterItem.tsx";

const ColorFilter: React.FC = () => {
  const colors = useSelector((state: RootState) => state.colors.colors);
  const selectedColors = useSelector(
    (state: RootState) => state.colors.selectedColors
  );
  const dispatch = useDispatch();

  const getColors = async () => {
    try {
      const response = await fetch("/api/colors");
      const data = await response.json();

      dispatch(setColors(data));
    } catch (error) {
      console.error("Failed to fetch colors", error);
    }
  };

  useEffect(() => {
    getColors();
  }, [dispatch]);

  const handleToggleColor = (id: string) => {
    dispatch(toggleSelectedColors(id));
  };

  return (
    <div>
      <h3 className="text-[#0E1422] font-medium text-sm mb-4">Colors</h3>
      <div className="grid grid-cols-5 gap-2.5">
        {colors.map((color) => {
          const isSelected = selectedColors.some((c) => c._id === color._id);
          return (
            <ColorFilterItem
              key={color._id}
              color={color}
              onToggle={handleToggleColor}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorFilter;
