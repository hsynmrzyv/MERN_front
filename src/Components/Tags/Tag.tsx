import React from "react";
import Close from "../../Icons/Close.tsx";

interface TagProps {
  label: string;
  onClose: () => void;
}

const Tag: React.FC<TagProps> = ({ label, onClose }) => {
  return (
    <button
      className="rounded-full flex items-center gap-2 border py-2 px-4 border-gray-400"
      onClick={onClose}
    >
      <span className="text-sm text-[#0E1422]">{label}</span>
      <span>
        <Close />
      </span>
    </button>
  );
};

export default Tag;
