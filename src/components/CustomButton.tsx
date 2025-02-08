import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  className?: string;
}

const CustomButton = ({ icon, className, ...props }: CustomButtonProps) => {
  return (
    <button
      {...props}
      className={`px-8 py-2 bg-transparent border w-32 h-10 flex justify-center items-center rounded-md ${
        className ?? ""
      }`}
    >
      {icon}
    </button>
  );
};

export default CustomButton;
