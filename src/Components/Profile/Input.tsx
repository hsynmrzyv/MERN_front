import React, { forwardRef, ForwardedRef } from "react";

interface InputPropsType {
  label: string;
  type: string;
  value?: string;
  className?: string;
}

const Input = forwardRef(
  (props: InputPropsType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="pb-6">
        <label
          className="text-[#474B57] text-sm leading-[24.5px] font-medium block"
          htmlFor=""
        >
          {props.label}
        </label>
        <input
          ref={ref}
          value={props.value}
          className="border py-[10px] px-[15px] rounded-md w-80"
          type={props.type}
        />
      </div>
    );
  }
);

export default Input;
