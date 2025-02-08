import React, { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  className,
  placeholder,
  ...props
}) => {
  return (
    <input
      {...props}
      className={`bg-zinc-100 border border-zinc-500 rounded-md w-full h-10 px-4 focus:outline-none ${
        className ?? ""
      }`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default CustomInput;
