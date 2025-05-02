// Button.jsx (in your components/ui/button folder)
import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
