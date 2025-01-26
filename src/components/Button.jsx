import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', className = '' }) => {
  let baseStyles = "rounded-md hover:scale-105 transition duration-300 font-medium"; // Common styles
  let variantStyles = "";
  let sizeStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-gradient-to-r text-[#ffffff] from-blue-500 to-purple-500 hover:bg-gradient-to-l";
      break;
    case 'secondary':
      variantStyles = "bg-white text-black text-base inter-font font-semibold hover:text-black border border-gray-600 hover:border-slate-300";
      break;
    case 'ghost':
      variantStyles = "bg-none border border-black text-gray-300 hover:bg-gray-600 hover:text-white hover:text-slate-300";
      break;
    default:
      variantStyles = "bg-gradient-to-r text-[#ffffff] inter-font font-semibold text-base from-[#0EA5E9] to-purple-500 hover:bg-gradient-to-l"; // Default to primary
  }

  switch (size) {
    case 'small':
      sizeStyles = "px-3 py-2 text-sm";
      break;
    case 'medium':
      sizeStyles = "px-6 py-3 text-base";
      break;
    case 'large':
      sizeStyles = "px-8 py-8 text-lg";
      break;
    default:
      sizeStyles = "px-6 py-2 text-base"; // Default to medium
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} // Combine styles
    >
      {children}
    </button>
  );
};

export default Button;