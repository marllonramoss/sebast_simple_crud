import React, { forwardRef, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, className, placeholder, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref} // <-- Adicionando a ref para funcionar com react-hook-form
        className={`bg-zinc-100 border border-zinc-500 rounded-md w-full h-10 px-4 focus:outline-none ${
          className ?? ""
        }`}
        placeholder={placeholder}
        type={type}
      />
    );
  }
);

CustomInput.displayName = "CustomInput"; // Necessário para o forwardRef

export default CustomInput;
